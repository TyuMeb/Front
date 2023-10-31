"use client";

import styles from "./dialog.module.scss";
import { Button } from "@src/components/shared/ui/button/button";
import ChatForm from "@src/components/account/dialog/chat-form";

const Dialog = () => {
    return (
        <article className={styles.dialog}>
            <div className={styles.wrapperHead}>
                <div className={styles.info}>
                    <div className={styles.infoPerformer}>
                        <span className={styles.userIcon}></span>
                        <h2 className={styles.header}>Чат с Исполнителем 1</h2>
                    </div>
                    <div className={styles.infoOrder}>
                        <p className={`${styles.text} ${styles.textBold}`}>Полка настенная</p>
                        <p className={`${styles.text} ${styles.textBold}`}>Срок исполнения: 45-50 дней</p>
                        <p className={`${styles.text} ${styles.textBold}`}>Стоимость: от 100 000 руб</p>
                    </div>
                </div>
                <Button onClick={() => {}}>Выбрать этого исполнителя</Button>
            </div>

            <div className={styles.wrapperMessage}>
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
            </div>

            <ChatForm />
        </article>
    );
};

export default Dialog;
