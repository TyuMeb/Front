import React, { FC, HTMLAttributes } from "react";
import styles from "./message-item.module.scss";

type TMessageProps = {
    messageId: number;
    text: string;
    sent: string;
    isMyMessage: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const MessageItem: FC<TMessageProps> = ({ messageId, text, sent, isMyMessage, children, ...rest }) => {
    return isMyMessage ? (
        <div className={`${styles.chat} ${styles.positionLeft}`}>
            <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

            <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
                <div className={`text-small ${styles.widthText}`}>
                    {text}
                    {children}
                </div>
            </div>
            <time className={styles.timeText}>{sent}</time>
        </div>
    ) : (
        <div className={`${styles.chat} ${styles.positionRight}`}>
            <time className={styles.timeText}>{sent}</time>

            <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
                <div className={`text-small ${styles.widthText}`}>
                    {text}
                    {children}
                </div>
            </div>
            <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
        </div>
    );
};
