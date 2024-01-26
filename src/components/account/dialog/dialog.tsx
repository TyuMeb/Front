"use client";

import React, { useState, useEffect, useRef } from "react";

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
import { useForm, Controller } from "react-hook-form";
import { useMeasuredRef } from "@src/hooks/use-measured-ref";
import { getFiles } from "@src/helpers/getFiles";
import { getCookie } from "typescript-cookie";
// import { useUser } from "@src/redux/slices/users-slice";

import { MessageItem } from "./message-item/message-item";
// import { UserAccount } from "@src/redux/api/generated";

type TMessage = {
  id: number;
  sent_at: string;
  sender: string;
  text: string;
  unread?: boolean;
};

const email = "user0@mail.ru";

const dateConverter = (d: string): string => {
  const messageDate = new Date(d);
  const currDate = new Date();
  if (messageDate.getDate() !== currDate.getDate())
    return `
      ${messageDate.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })}.
      ${(messageDate.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}.
      ${messageDate.getFullYear()}`;
  return `
    ${messageDate.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
    ${messageDate.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
};

export const Dialog = () => {
  const measuredForm = useMeasuredRef();
  const measuredDialog = useMeasuredRef();
  const [filesPreview, setFilesPreview] = useState<filesPreviewProps[] | []>([]);
  const dispatch = useAppDispatch();
  const { selectedPerformer } = useAppSelector((store) => store.account);
  const ws = useRef<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);

  useEffect(() => {
    if (!ws.current) ws.current = new WebSocket("wss://api.whywe.ru/ws/chat/2/", getCookie("access_token"));

    const getMessages = () => {
      ws.current?.send(JSON.stringify({ command: "fetch_messages", message: "fetch" }));
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
        const { message, sender } = JSON.parse(e.data);
        setMessagesList((messages) => [
          ...messages,
          { id: 9999, sender: sender, text: message, sent_at: new Date().toString() },
        ]);
      }
    };
    ws.current?.addEventListener("open", getMessages);
    ws.current?.addEventListener("message", showData);

    return () => {
      ws.current?.removeEventListener("open", getMessages);
      ws.current?.removeEventListener("message", showData);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [measuredForm.elementHeight, messagesList]);

  const { handleSubmit, resetField, control } = useForm({
    defaultValues: {
      chat: "",
    },
  });

  const onSubmitHandler = (data: { chat: string }) => {
    const files = getFiles(filesPreview);

    const formFiles = new FormData();
    files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));
    console.log({ files, text: data.chat, formData: formFiles, filesPreview });
    ws.current?.send(
      JSON.stringify({ command: "new_message", message: { files, text: data.chat, formData: formFiles, filesPreview } })
    );
    resetField("chat");
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
            sent={dateConverter(m.sent_at)}
            unread={!!(i % 2)}
            isMyMessage={email === m.sender}
            avaColor="red"
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
          <Controller
            control={control}
            name="chat"
            render={({ field: { onChange, value, ref } }) => (
              <Textarea onChange={onChange} defaultValue="" value={value} ref={ref} />
            )}
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
        </Form>

        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </article>
  );
};
