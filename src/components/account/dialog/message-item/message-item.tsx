import React, { FC, HTMLAttributes, useState, useEffect } from "react";
import styles from "./message-item.module.scss";
import { Icon } from "@src/components/icon";
import { useInView } from "react-intersection-observer";

type TMessageProps = {
  messageId: number;
  text: string;
  sent: string;
  isMyMessage: boolean;
  unread: boolean;
  avaColor: string;
} & HTMLAttributes<HTMLDivElement>;

export const MessageItem: FC<TMessageProps> = ({ text, sent, isMyMessage, unread, avaColor, children }) => {
  const [isUnread, setIsUnread] = useState(unread);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (isUnread && inView) {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        //TODO: дёргаем ручку прочитанного сообщения
        setIsUnread(false);
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
      {isUnread && <Icon glyph="checked" />}
    </div>
  );
};
