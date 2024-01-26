"use client";

import React, { useState, useEffect, HTMLAttributes } from "react";

import styles from "./dialog.module.scss";
import { Button } from "@src/shared/ui/button";
import { WrapperForm, InputPreviewFiles, PreviewFiles, FilesPreview } from "@src/components/account/wrapper-form";
import { Textarea } from "@src/shared/ui/inputs/textarea";

import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";
import { useForm } from "react-hook-form";
import { useMeasuredRef } from "@src/hooks/use-measured-ref";
import { getFiles } from "@src/helpers/getFiles";
import { WrapperInfo } from "./wrapper-info";
import { Chat } from "./chat/chat";

export type OrderInfo = {
  customer?: string;
  name: string;
  termOfExecution: string;
  price: string;
  index: number;
};

export type DialogProps = {
  orderInfo: OrderInfo;
} & HTMLAttributes<HTMLDivElement>;

export const Dialog = ({ orderInfo, ...props }: DialogProps) => {
  const measuredForm = useMeasuredRef();
  const measuredDialog = useMeasuredRef();

  const [filesPreview, setFilesPreview] = useState<FilesPreview[] | []>([]);

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

  return (
    <article className={styles.dialog} {...props}>
      <WrapperInfo orderInfo={orderInfo} getObserver={measuredDialog.getObserver} />

      <Chat heightForm={measuredForm.elementHeight} heightDialog={measuredDialog.elementHeight} />

      <div className={styles.wrapperForm} ref={measuredForm.getObserver}>
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
              setFilesPreview={setFilesPreview}>
              <Paperclip />
            </InputPreviewFiles>

            <Button className={styles.buttonSubmit} type="submit">
              <Icon glyph="paper_airplane" />
            </Button>
          </WrapperForm>
        </form>

        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </article>
  );
};
