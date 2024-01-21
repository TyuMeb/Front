"use client";

import React, { useState, useEffect } from "react";

import styles from "./dialog.module.scss";
import { openModal } from "@src/redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { Form } from "@src/components/account/form";
import { Textarea } from "@src/components/account/form/textarea";

import { InputPreviewFiles } from "@src/components/account/form/input-preview-files";
import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";
import { PreviewFiles } from "@src/components/account/form/preview-files";
import { filesPreviewProps } from "@src/components/account/form/formTypes";
import { useForm } from "react-hook-form";
import { useMeasuredRef } from "@src/hooks/use-measured-ref";
import { getFiles } from "@src/helpers/getFiles";
import { getCookie } from "typescript-cookie";

import { MessageItem } from "./message-item/message-item";

type TMessage = {
    id: number;
    sent_at: string;
    sender: string;
    text: string;
};

const email = "user0@mail.ru";
const ws = new WebSocket("wss://api.whywe.ru/ws/chat/2/", getCookie("access_token"));
console.log(ws);

export const Dialog = () => {
    const measuredForm = useMeasuredRef();
    const measuredDialog = useMeasuredRef();

    const [filesPreview, setFilesPreview] = useState<filesPreviewProps[] | []>([]);
    const dispatch = useAppDispatch();
    const { selectedPerformer } = useAppSelector((store) => store.account);

    const [messagesList, setMessagesList] = useState<TMessage[]>([]);

    useEffect(() => {
        const getMessages = () => {
            ws.send(JSON.stringify({ command: "fetch_messages", message: "fetch" }));
        };

        const showData = (e: MessageEvent) => {
            const { messages } = JSON.parse(e.data);
            if (messages) {
                setMessagesList(
                    messages.sort((a: TMessage, b: TMessage) => {
                        if (new Date(a.sent_at) > new Date(b.sent_at)) return 1;
                        else return -1;
                    })
                );
                console.log(messages);
            } else {
                // setMessagesList([...messagesList, e.data]);
                console.log(JSON.parse(e.data));
            }
        };
        ws.addEventListener("open", getMessages);
        ws.addEventListener("message", showData);

        return () => {
            ws.removeEventListener("open", getMessages);
            ws.removeEventListener("message", showData);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [measuredForm.elementHeight]);

    const { handleSubmit, register } = useForm({
        values: {
            chat: "",
        },
    });

    const onSubmitHandler = (data: { chat: string }) => {
        const files = getFiles(filesPreview);

        const formFiles = new FormData();
        files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log({ files, text: data.chat, formData: formFiles, filesPreview });

        ws.send(JSON.stringify({ command: "new_message", message: data.chat }));
    };

    const settingsInput = {
        settings: {
            maxSizeFile: 1000000,
            maxSizeImage: 100000,
            maxCountFiles: 6,
            multiple: true,
        },
        disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
    };

    const performers = {
        id: "1",
        index: 1,
        orderName: "Полка настенная",
        termOfExecution: "70",
        cost: 100000,
    };

    return (
        <article className={styles.dialog}>
            <div className={styles.wrapperHead} ref={measuredDialog.getObserver}>
                <div className={styles.line}>
                    <div className={styles.info}>
                        <div className={styles.infoPerformer}>
                            <span className={styles.userIcon}></span>
                            <h2 className="subtitle2">
                                Чат с <span className={styles.fontWeight}>Исполнителем {performers.index}</span>
                            </h2>
                        </div>
                        <div className={styles.infoOrder}>
                            <p className="text-small-semibold">{performers.orderName}</p>
                            <p className="text-small-semibold">
                                Срок исполнения: &nbsp;
                                {performers.termOfExecution}
                                &nbsp; дней
                            </p>
                            <p className="text-small-semibold">
                                Стоимость: от &nbsp;
                                {performers.cost}
                                &nbsp; руб
                            </p>
                        </div>
                    </div>
                    {!selectedPerformer ? (
                        <Button onClick={() => dispatch(openModal("chooseThisProducer"))}>
                            <p className="text-medium">Выбрать этого исполнителя</p>
                        </Button>
                    ) : (
                        <div className={styles.wrapperSelectedPerformer}>
                            <ul className={styles.list}>
                                <li className={styles.itemSelectedPerformer}>
                                    <p className="text-medium-semibold">E-mail: example@yandex.ru</p>
                                </li>

                                <li>
                                    <p className="text-medium-semibold">Телефон: +79025062076</p>
                                </li>

                                <li className={styles.itemSelectedPerformer}>
                                    <p className="text-medium-semibold">ИП Зверев Илья Владимирович</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div
                style={{
                    marginBottom: `${measuredForm.elementHeight + 28}px`,
                    marginTop: `${measuredDialog.elementHeight}px`,
                }}
                className={styles.wrapper}>
                {messagesList.map((m, i) => (
                    <MessageItem
                        key={i}
                        text={m.text}
                        messageId={m.id}
                        sent={m.sent_at}
                        isMyMessage={email === m.sender}
                    />
                ))}

                {/* <MessageItem text="Какой-то текст" messageId={1} sent="вчера" sender="ЯЯЯ">
                    <ul className={styles.gallery}>
                        <li className={styles.item}></li>
                        <li className={styles.item}></li>
                        <li className={styles.item}></li>
                    </ul>
                </MessageItem>
                <MessageItem text="Какой-то текст" messageId={2} sent="вчера" sender="ЯЯЯ" />
                <MessageItem text="Какой-то текст" messageId={3} sent="вчера" sender="ЯЯЯ" /> */}
            </div>

            <div className={styles.wrapperForm} ref={measuredForm.getObserver}>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Textarea
                        {...register("chat", {
                            required: true,
                        })}
                    />

                    <InputPreviewFiles
                        disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
                        {...settingsInput.settings}
                        setFilesPreview={setFilesPreview}>
                        <Paperclip />
                    </InputPreviewFiles>

                    <Button className={styles.buttonSubmit} type="submit">
                        <Icon glyph="paper_airplane" />
                    </Button>

                    <Button
                        className={styles.buttonSubmit}
                        type="button"
                        onClick={() => {
                            ws.send(JSON.stringify({ command: "fetch_messages", message: "test11" }));
                        }}>
                        Новое
                    </Button>
                </Form>

                {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
            </div>
        </article>
    );
};
