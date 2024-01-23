import React, { FC, HTMLAttributes } from "react";
import styles from "./message-item.module.scss";
import { Icon } from "@src/components/icon";

type TMessageProps = {
  messageId: number;
  text: string;
  sent: string;
  isMyMessage: boolean;
  unread: boolean;
  avaColor: string;
} & HTMLAttributes<HTMLDivElement>;

export const MessageItem: FC<TMessageProps> = ({
  messageId,
  text,
  sent,
  isMyMessage,
  unread,
  avaColor,
  children,
  ...rest
}) => {
  return isMyMessage ? (
    <div className={`${styles.chat} ${styles.positionRight}`}>
      {unread && <Icon glyph="checked" />}
      <time className={styles.timeText}>{sent}</time>

      <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
        <div className={`text-small" ${styles.widthText}`}>
          {text}
          {children}
        </div>
      </div>
      <span className={`${styles.userIcon} ${styles.userAvatarMessage}`} style={{ backgroundColor: avaColor }}></span>
    </div>
  ) : (
    <div className={`${styles.chat} ${styles.positionLeft}`}>
      <span className={`${styles.userIcon} ${styles.userAvatarMessage}`} style={{ backgroundColor: avaColor }}></span>

      <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
        <div className={`text-small ${styles.widthText}`}>
          {text}
          {children}
        </div>
      </div>
      <time className={styles.timeText}>{sent}</time>
      {unread && <Icon glyph="checked" />}
    </div>
  );
};
