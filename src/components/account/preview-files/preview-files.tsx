import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./preview-files.module.scss";
import { cn } from "@src/shared/lib/cn";
import { FilePreview } from "@src/shared/types/files.types";
import { useAppDispatch } from "@src/redux/hooks";
import { removeFile } from "@src/redux/slices/local-files-slice";
import { useDeleteFileMutation } from "@src/redux/api/files-api-slice";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";
import { getInfoAboutFile } from "@src/shared/lib/get-info-about-file";
import { FileIcon } from "./file-icon";
const cx = classNames.bind(styles);

type PreviewFilesT = {
  filesPreview: FilePreview[];
  removeErrorFile: (id: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const PreviewFiles = ({ filesPreview, removeErrorFile }: PreviewFilesT) => {
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

  const imagePreviewComponent = ({
    id,
    previewUrl,
    name,
    typeName,
    size,
    error,
  }: {
    id: string;
    previewUrl: string | null;
    name: string;
    typeName: string;
    size: string;
    error: boolean;
  }) => (
    <div className={styles.containerPreviewImage}>
      <button className={styles.buttonDelete} onClick={() => removeHandlerFile(id)}>
        <span className={styles.crossDelete} />
      </button>

      {previewUrl ? (
        <div className={styles.containerImage}>
          <Image className={styles.image} fill={true} src={previewUrl} alt={name} />
        </div>
      ) : (
        <FileIcon type={typeName} />
      )}

      <div className={styles.containerFileInfo}>
        <p className={cn("text-very-small", styles.containerText)}>
          <span className={styles.fileName}>{name}.</span>
          <span>{typeName}</span>
        </p>
        <p className={cx("text-very-small", "fileSize", { errorText: error })}>{size}</p>
      </div>
    </div>
  );

  return (
    <ul className={cn(styles.containerImages, "scrollbar-x")}>
      {filesPreview.map((file) => {
        const { id, previewUrl, fileSize, error } = file;
        const { typeName, name, size } = getInfoAboutFile({ name: file.name, fileSize });

        return (
          <li key={id} className={styles.imageItem}>
            {imagePreviewComponent({ name, id, previewUrl, size, typeName, error })}
          </li>
        );
      })}
    </ul>
  );
};
