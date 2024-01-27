"use client";

import React, { HTMLAttributes } from "react";

import styles from "./chat.module.scss";

type ChatProps = {
  heightForm: number;
  heightDialog: number;
} & HTMLAttributes<HTMLDivElement>;

export const Chat = ({ heightForm, heightDialog, ...props }: ChatProps) => {
  return (
    <div
      style={{
        marginBottom: `${heightForm + 28}px`,
        marginTop: `${heightDialog}px`,
      }}
      className={styles.wrapper}
      {...props}
    >
      <div className={`${styles.chat} ${styles.positionLeft}`}>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

        <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>
            Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и hjgfkdgndgfnk...
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
          <div className={`text-small ${styles.widthText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
          </div>
        </div>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
      </div>
      <div className={`${styles.chat} ${styles.positionLeft}`}>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

        <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>
            Добрый день! Присылаю варианты и фотографии. Если есть...Добрый день! Присылаю варианты и hjgfkdgndgfnk...
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
          <div className={`text-small ${styles.widthText}`}>Lorem ipsum dolor sit amet, consectetur</div>
        </div>
        <time className={styles.timeText}>23:12</time>
      </div>
      <div className={`${styles.chat} ${styles.positionRight}`}>
        <time className={styles.timeText}>23:12</time>

        <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
          </div>
        </div>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
      </div>
      <div className={`${styles.chat} ${styles.positionLeft}`}>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

        <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>Lorem ipsum dolor sit amet, consectetur</div>
        </div>
        <time className={styles.timeText}>23:12</time>
      </div>
      <div className={`${styles.chat} ${styles.positionLeft}`}>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>

        <div className={`${styles.messageExecutor} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>Lorem ipsum dolor sit amet, consectetur</div>
        </div>
        <time className={styles.timeText}>23:12</time>
      </div>
      <div className={`${styles.chat} ${styles.positionRight}`}>
        <time className={styles.timeText}>23:12</time>

        <div className={`${styles.messageClient} ${styles.wrapperMessage}`}>
          <div className={`text-small ${styles.widthText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim
          </div>
        </div>
        <span className={`${styles.userIcon} ${styles.userAvatarMessage}`}></span>
      </div>
    </div>
  );
};
