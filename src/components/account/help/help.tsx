import React, { useState } from "react";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { WrapperForm, InputPreviewFiles, PreviewFiles, FilesPreview } from "@src/components/account/wrapper-form";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { getFiles } from "@src/helpers/getFiles";

import styles from "./help.module.scss";

const cx = classNames.bind(styles);

export const Help = () => {
  const [filesPreview, setFilesPreview] = useState<FilesPreview[] | []>([]);

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
      accept: ".png, .jpg, .jpeg",
    },
    disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperText}>
        <h2 className="subtitle2">Чат с поддержкой (ответ может занимать до 24ч)</h2>
      </div>
      <div className={styles.wrapperForm}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <WrapperForm>
            <Textarea
              className={styles.textarea}
              {...register("chat", {
                required: true,
              })}
            />

            <InputPreviewFiles
              disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
              {...settingsInput.settings}
              setFilesPreview={setFilesPreview}
            >
              <Paperclip
                className={cx({
                  disabled: filesPreview.length >= settingsInput.settings.maxCountFiles,
                })}
              />
            </InputPreviewFiles>

            <Button className={styles.buttonSubmit} type="submit">
              <Icon glyph="paper_airplane" />
            </Button>
          </WrapperForm>
        </form>

        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </div>
  );
};
