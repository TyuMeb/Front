import React, { useEffect } from "react";

import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useCreateSupportRequestMutation } from "@src/redux/api/support-api-slice";

import styles from "./help.module.scss";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { VALIDATIONS_TEXTAREA } from "@src/shared/constants/fields";
import { FileType } from "@src/shared/types/files.types";
import { FileInput } from "@src/shared/ui/inputs";
import { usePreviewFiles } from "@src/hooks/use-preview-files";
import { PreviewFiles } from "@src/components/account/preview-files";
import { addFiles, useFiles, resetFiles as resetLocalFiles } from "@src/redux/slices/local-files-slice";
import { SETTINGS_INPUT_FILE } from "./constants";
import { useUploadFileMutation } from "@src/redux/api/files-api-slice";

const cx = classNames.bind(styles);

type HelpForm = {
  user_question: string;
};

export const Help = () => {
  const { filesPreview, onChange, removeFileById, setFilesPreview } = usePreviewFiles(SETTINGS_INPUT_FILE);
  const localFiles = useFiles();

  const [uploadFile] = useUploadFileMutation();

  // useEffect(() => {
  //   setFilesPreview(localFiles);
  // }, [])

  useEffect(() => {
    setFilesPreview(localFiles);
  }, [localFiles]);

  useEffect(() => {
    if (filesPreview.length) {
      const formFiles = new FormData();

      filesPreview.forEach((fileData) => {
        if (fileData.error) return;
        if (fileData?.file) formFiles.append("upload_file", fileData?.file);
      });

      if (!formFiles.get("upload_file")) {
        return;
      }

      uploadFile(formFiles)
        .unwrap()
        .then((files) => {
          dispatch(addFiles(files));
        })
        .catch((error) => {
          dispatch(
            createNotifyModal({
              name: "errorUploadFiles",
              type: "error",
              text: error.data?.detail || "Ошибка загрузки файла на сервер",
            })
          );
        });
    }
  }, [filesPreview]);

  const resetFiles = () => {
    setFilesPreview([]);
    dispatch(resetLocalFiles());
  };

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

  const dispatch = useAppDispatch();

  const onSubmitHandler = (data: HelpForm) => {
    const idFiles = localFiles.map((file) => file.id) as FileType[] | [];

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
        resetFiles();
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

          <FileInput multiple={SETTINGS_INPUT_FILE.multiple} onChange={onChange}>
            <Icon
              glyph="paperclip"
              className={cx("icon", {
                disabled: localFiles.length >= SETTINGS_INPUT_FILE.maxCountFiles,
              })}
            />
          </FileInput>

          <Button className={styles.buttonSubmit} isLoading={isLoading} type="submit">
            <Icon glyph="paper_airplane" />
          </Button>
        </div>

        {Boolean(errors.user_question?.message) && (
          <span className={cx("errorMessage", "text-small")}>{errors.user_question?.message}</span>
        )}
      </form>

      {localFiles.length || filesPreview.length ? (
        <PreviewFiles filesPreview={filesPreview} removeErrorFile={removeFileById} />
      ) : undefined}
    </div>
  );
};
