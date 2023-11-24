"use client";

import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./dialog.module.scss";
import { openModal } from "@src/redux/slices/modal-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import ChatForm from "@src/components/account/dialog/chat-form";
import Textarea from "@src/components/account/form/textarea";

import { FileInput } from "@src/shared/ui/inputs/file/file";
import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";
import PreviewFiles from "@src/components/account/form/preview-files";
import { filesPreviewType, filesListType } from "@src/components/account/form/formTypes";

const cx = classNames.bind(styles);

const Dialog = () => {
    const [formHeight, setFormHeight] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [formHeight]);

    const measuredRef = useCallback((node: HTMLDivElement) => {
        if (!node) return;
        const resizeObserver = new ResizeObserver(() => {
            setFormHeight(node.getBoundingClientRect().height);
        });
        resizeObserver.observe(node);
    }, []);

    const [filesPreview, setFilesPreview] = useState<filesPreviewType[] | []>([]);
    const [filesList, setFilesList] = useState<filesListType[] | []>([]);

    const onSubmitHandler = (data: { chat: string; files: filesListType[] }) => {
        const formFiles = new FormData();
        data.files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log(data.files, data.chat, formFiles, filesPreview);
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
                <ChatForm onSubmit={onSubmitHandler} filesList={filesList}>
                    <Textarea name="chat" />

                    <FileInput
                        name="input"
                        maxSizeFile={1000000}
                        maxSizeImage={100000}
                        maxCountFiles={6}
                        // accept=".png, .jpg, .jpeg"
                        disabled={filesPreview.length >= 6 && true}
                        multiple
                        setFilesPreview={setFilesPreview}
                        setFilesList={setFilesList}>
                        <Paperclip className={cx({ disabled: filesPreview.length >= 6 && true })} />
                    </FileInput>

                    <Button className={styles.buttonSubmit}>
                        <Icon glyph="paper_airplane" />
                    </Button>
                </ChatForm>

                {filesPreview.length ? (
                    <PreviewFiles files={filesPreview} setFilesList={setFilesList} setFilesPreview={setFilesPreview} />
                ) : undefined}
            </div>
        </article>
    );
};

export default Dialog;
