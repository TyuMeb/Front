/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";

import styles from "./preview-files.module.scss";
import { Icon } from "@src/components/icon";
import { cn } from "@src/shared/lib/cn";
import { FilePreview, FileType } from "@src/shared/types/files.types";
import { useAppDispatch } from "@src/redux/hooks";
import { removeFile } from "@src/redux/slices/local-files-slice";
import { useDeleteFileMutation } from "@src/redux/api/files-api-slice";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { getInfoAboutFile } from "@src/shared/lib/get-info-about-file";

type convertProps = "MB";

type PreviewFilesT = {
  convertType?: convertProps;
  localFiles: FileType[];
  filesPreviewError: FilePreview[];
  removeErrorFile: (id: string) => void;
};

export const PreviewFiles = ({ convertType = "MB", filesPreviewError, localFiles, removeErrorFile }: PreviewFilesT) => {
  const [deleteFile] = useDeleteFileMutation();
  const dispatch = useAppDispatch();

  const removeHandlerFile = (id: string) => {
    deleteFile({ file_id: id })
      .then(() => dispatch(removeFile(id)))
      .catch((error) => {
        dispatch(
          createNotifyModal({
            name: "errorUploadFiles",
            type: "error",
            text: error.data?.detail || "Ошибка удаления файла",
          })
        );
      });
  };

  const imagePreviewComponent = ({ id, previewUrl, name }: { [name: string]: string }) => (
    <div className={styles.containerImage}>
      <span className={styles.crossDelete} onClick={() => removeHandlerFile(id)} />
      <Image className={styles.image} width={32} height={32} src={previewUrl || ""} alt={name} />
    </div>
  );

  const filePreviewComponent = ({ id, typeName }: { [name: string]: string }) => (
    <div className={styles.containerImage}>
      <span className={styles.crossDelete} onClick={() => removeHandlerFile(id)} />
      <Icon width={32} height={32} glyph="file" />
      <p className={styles.typeFile}>{typeName}</p>
    </div>
  );

  const filePreviewErrorComponent = ({ id, name, fileSize, typeName }: { [name: string]: string }) => (
    <>
      <div className={styles.containerImage}>
        <span className={styles.crossDelete} onClick={() => removeErrorFile(id)} />
        <Icon width={24} height={32} glyph="file" />
        <Icon className={styles.position} width={10} height={16} glyph="exclamation" />
        <p className={styles.typeFile}>{typeName}</p>
      </div>
      <div className={styles.descriptionImage}>
        <p className={styles.textDesc}>{name}</p>
        <p className={`${styles.textDesc} ${styles.textColor}`}>{fileSize}</p>
      </div>
    </>
  );

  return (
    <ul className={cn(styles.containerImages, "scrollbar-x")}>
      {localFiles.map((file) => {
        const { id, preview_url: previewUrl, original_name: originalName, file_size: fileSize } = file;
        const { typeName, name, size } = getInfoAboutFile({ originalName, fileSize, convertType });

        return previewUrl ? (
          <li key={id} className={styles.imageItem}>
            {imagePreviewComponent({ name, id, previewUrl })}
          </li>
        ) : (
          <li key={id} className={styles.imageItem}>
            {filePreviewComponent({ typeName, id })}
          </li>
        );
      })}

      {filesPreviewError.map((fileError) => {
        const { id, previewUrl, name: originalName, fileSize } = fileError;
        const { typeName, name, size } = getInfoAboutFile({ originalName, fileSize, convertType });
        return (
          <li key={id} className={styles.imageItem}>
            {filePreviewErrorComponent({ id, name, fileSize: size, typeName })}
          </li>
        );
      })}
    </ul>
  );
};
