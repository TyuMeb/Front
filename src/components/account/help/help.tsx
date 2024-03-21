import React, { useState } from "react";

import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { InputPreviewFiles, PreviewFiles } from "@src/components/account/wrapper-form";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useCreateSupportRequestMutation } from "@src/redux/api/support-api-slice";

import styles from "./help.module.scss";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { VALIDATIONS_TEXTAREA } from "@src/shared/constants/fields";
import { resetFiles, useFiles } from "@src/redux/slices/files-slice";
import { FilePreview, FileType } from "@src/shared/types/files.types";

const cx = classNames.bind(styles);

type HelpForm = {
  user_question: string;
};

export const Help = () => {
  const [filesPreview, setFilesPreview] = useState<FilePreview[] | []>([]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<HelpForm>({
    values: {
      user_question: "",
    },
  });

  const [createSupportRequest, { isLoading }] = useCreateSupportRequestMutation();

  const files = useFiles();

  const dispatch = useAppDispatch();

  const onSubmitHandler = (data: HelpForm) => {
    const idFiles = files.map((file: FileType) => file.id) as FileType[] | [];

    createSupportRequest({ ...data, files: idFiles })
      .unwrap()
      .then(() => {
        dispatch(
          createNotifyModal({
            name: "successHelp",
            type: "success",
            text: "Сообщение успешно отправленно",
          })
        );
        reset();
        setFilesPreview([]);
        console.log(filesPreview);
        dispatch(resetFiles());
      })
      .catch((error) => {
        console.log("🚀 ~ file: help.tsx:46 ~ onSubmit ~ error:", error);

        if (error.status >= 500) {
          dispatch(
            createNotifyModal({
              name: "errorPassword",
              type: "error",
            })
          );
        }

        const keys = Object.keys(error?.data || {}) as Array<keyof HelpForm>;
        keys.forEach((key) => {
          dispatch(
            createNotifyModal({
              name: "errorHelp",
              type: "error",
              text: error.data[key]?.join(", "),
            })
          );
        });
      });
  };

  const settingsInput = {
    settings: {
      maxSizeFile: 1000000,
      maxSizeImage: 100000,
      maxCountFiles: 6,
      multiple: true,
      accept: ".png, .jpg, .jpeg",
    },
    disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h2 className="subtitle2">Обращение в поддержку (ответ может занимать до 24ч)</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.containerForm}>
        <div className={styles.content}>
          <Textarea
            className={styles.textarea}
            placeholder="Написать сообщение"
            id="userQuestion"
            error={Boolean(errors.user_question?.message)}
            errorMessage={errors.user_question?.message}
            {...register("user_question", {
              ...VALIDATIONS_TEXTAREA,
            })}
          />

          <InputPreviewFiles
            disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
            {...settingsInput.settings}
            setFilesPreview={setFilesPreview}
          >
            <Icon
              glyph="paperclip"
              className={cx("icon", {
                disabled: filesPreview.length >= settingsInput.settings.maxCountFiles,
              })}
            />
          </InputPreviewFiles>

          <Button className={styles.buttonSubmit} isLoading={isLoading} type="submit">
            <Icon glyph="paper_airplane" />
          </Button>
        </div>

        {Boolean(errors.user_question?.message) && (
          <span className={cx("errorMessage", "text-small")}>{errors.user_question?.message}</span>
        )}
      </form>

      {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
    </div>
  );
};
