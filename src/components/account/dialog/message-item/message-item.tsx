import React, { FC, HTMLAttributes, useState, useEffect } from "react";
import styles from "./message-item.module.scss";
import { Icon } from "@src/components/icon";
import { useInView } from "react-intersection-observer";

type TMessageProps = {
  hashcode: string;
  text: string;
  sent: string;
  isMyMessage: boolean;
  isRead: boolean;
  avaColor: string;
  markMessagesAsRead: (hash: string[]) => boolean;
} & HTMLAttributes<HTMLDivElement>;

export const MessageItem: FC<TMessageProps> = ({
  text,
  sent,
  isMyMessage,
  isRead,
  avaColor,
  children,
  hashcode,
  markMessagesAsRead,
}) => {
  const [isReadedMessage, setIsReadedMessage] = useState(isRead);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (!isReadedMessage && inView) {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        markMessagesAsRead([hashcode]);
        //TODO: дёргаем ручку прочитанного сообщения
        setIsReadedMessage(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
    return () => {};
  }, [inView]);

  return isMyMessage ? (
    <div className={`${styles.chat} ${styles.positionRight}`}>
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
    <div ref={ref} className={`${styles.chat} ${styles.positionLeft}`}>
      <span className={`${styles.userIcon} ${styles.userAvatarMessage}`} style={{ backgroundColor: avaColor }}></span>

      <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
        <div className={`text-small ${styles.widthText}`}>
          {text}
          {children}
        </div>
      </div>
      <time className={styles.timeText}>{sent}</time>
      {!isReadedMessage && <Icon glyph="checked" />}
    </div>
  );
};
