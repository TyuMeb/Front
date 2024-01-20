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

export const Dialog = () => {
  const measuredForm = useMeasuredRef();
  const measuredDialog = useMeasuredRef();

  const [filesPreview, setFilesPreview] = useState<filesPreviewProps[] | []>([]);
  const dispatch = useAppDispatch();
  const { selectedPerformer } = useAppSelector((store) => store.account);

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
        </Form>

        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </article>
  );
};
