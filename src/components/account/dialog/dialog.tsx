"use client";

import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./dialog.module.scss";
import { openModal } from "@src/redux/slices/modal-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { Form } from "@src/components/account/form";
import { Textarea } from "@src/components/account/form/textarea";

import { FileInput } from "@src/shared/ui/inputs/file/file";
import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";
import { PreviewFiles } from "@src/components/account/form/preview-files";
import { filesPreviewT, filesListT } from "@src/components/account/form/formTypes";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

export const Dialog = () => {
    const [formHeight, setFormHeight] = useState<number>(0);
    const [filesPreview, setFilesPreview] = useState<filesPreviewT[] | []>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [formHeight]);

    const { handleSubmit, register } = useForm({
        values: {
            chat: "",
        },
    });

    const measuredRef = useCallback((node: HTMLDivElement) => {
        if (!node) return;
        const resizeObserver = new ResizeObserver(() => {
            setFormHeight(node.getBoundingClientRect().height);
        });
        resizeObserver.observe(node);
    }, []);

    const getFiles = (filesList: filesPreviewT[]) => {
        const files = [] as filesListT[];

        filesList.forEach((file) => {
            if (!file.error) {
                files.push({ id: file.id, file: file.file });
            }
        });

        return files;
    };

    const onSubmitHandler = (data: { chat: string }) => {
        const files = getFiles(filesPreview);

        const formFiles = new FormData();
        files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log({ files, text: data.chat, formData: formFiles, filesPreview });
    };

    const settingsInput = {
        settings: {
            maxSizeFile: 1000000,
            maxSizeImage: 100000,
            maxCountFiles: 6,
            multiple: true,
            // accept=".png, .jpg, .jpeg"},
        },
        disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
    };

    return (
        <article className={styles.dialog}>
            <div className={styles.wrapperHead}>
                <div className={styles.line}>
                    <div className={styles.info}>
                        <div className={styles.infoPerformer}>
                            <span className={styles.userIcon}></span>
                            <h2 className={styles.header}>
                                Чат с <span className={styles.fontWeight}>Исполнителем 1</span>
                            </h2>
                        </div>
                        <div className={styles.infoOrder}>
                            <p className={`${styles.text} ${styles.textBold}`}>Полка настенная</p>
                            <p className={`${styles.text} ${styles.textBold}`}>Срок исполнения: 45-50 дней</p>
                            <p className={`${styles.text} ${styles.textBold}`}>Стоимость: от 100 000 руб</p>
                        </div>
                    </div>
                    <Button onClick={() => dispatch(openModal("chooseThisProducer"))}>
                        <p className={styles.textButton}>Выбрать этого исполнителя</p>
                    </Button>
                </div>
            </div>

            <div style={{ marginBottom: `${formHeight + 28}px` }} className={styles.wrapper}>
                <div className={`${styles.chat} ${styles.positionLeft}`}>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

                    <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и
                            hjgfkdgndgfnk...
                        </div>

                        <ul className={styles.gallery}>
                            <li className={styles.item}></li>
                            <li className={styles.item}></li>
                            <li className={styles.item}></li>
                        </ul>
                    </div>
                    <time className={styles.timeText}>23:12</time>
                </div>

                <div className={`${styles.chat} ${styles.positionRight}`}>
                    <time className={styles.timeText}>23:12</time>

                    <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </div>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
                </div>

                <div className={`${styles.chat} ${styles.positionLeft}`}>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

                    <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и
                            hjgfkdgndgfnk...
                        </div>

                        <ul className={styles.gallery}>
                            <li className={styles.item}></li>
                            <li className={styles.item}></li>
                            <li className={styles.item}></li>
                        </ul>
                    </div>
                    <time className={styles.timeText}>23:12</time>
                </div>

                <div className={`${styles.chat} ${styles.positionLeft}`}>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

                    <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <time className={styles.timeText}>23:12</time>
                </div>

                <div className={`${styles.chat} ${styles.positionRight}`}>
                    <time className={styles.timeText}>23:12</time>

                    <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </div>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
                </div>

                <div className={`${styles.chat} ${styles.positionLeft}`}>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

                    <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <time className={styles.timeText}>23:12</time>
                </div>

                <div className={`${styles.chat} ${styles.positionLeft}`}>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

                    <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <time className={styles.timeText}>23:12</time>
                </div>

                <div className={`${styles.chat} ${styles.positionRight}`}>
                    <time className={styles.timeText}>23:12</time>

                    <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
                        <div className={`${styles.text} ${styles.widthText}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                        </div>
                    </div>
                    <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
                </div>
            </div>

            <div className={styles.wrapperForm} ref={measuredRef}>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Textarea
                        {...register("chat", {
                            required: true,
                        })}
                    />

                    <FileInput
                        disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
                        {...settingsInput.settings}
                        setFilesPreview={setFilesPreview}>
                        <Paperclip />
                    </FileInput>

                    <Button className={styles.buttonSubmit} type="submit">
                        <Icon glyph="paper_airplane" />
                    </Button>
                </Form>

                {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
            </div>
        </article>
    );
};
