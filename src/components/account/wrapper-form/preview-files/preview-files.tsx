/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Image from "next/image";

import styles from "./preview-files.module.scss";
import { Icon } from "@src/components/icon";
import { FilePreview } from "@src/shared/types/files.types";
import { getLocalStorage } from "@src/shared/lib/get-local-storage";
import { cn } from "@src/shared/lib/cn";

type convertProps = "MB";

type PreviewFilesT = {
  convertType?: convertProps;
  setFilesPreview: Dispatch<SetStateAction<FilePreview[] | []>>;
};

export const PreviewFiles = ({ convertType = "MB", setFilesPreview }: PreviewFilesT) => {
  const removeHandlerFile = (event: MouseEvent<HTMLSpanElement>, id: string) => {
    const target = event.target as HTMLDivElement;
    if (target) {
      setFilesPreview((prevValue: FilePreview[]) => {
        const newArr = prevValue.filter((value) => value.id !== id);
        return newArr;
      });
    }
  };

  const converterValue = {
    MB: { size: 1000000, symbol: "mb" },
  };

  const convertTo = (size: number, convertType: convertProps) => {
    const convertValue = (size / converterValue[convertType].size).toFixed(3);
    return `${convertValue} ${converterValue[convertType].symbol}`;
  };

  const renderImages = () => {
    const localStorage = getLocalStorage();
    if (!localStorage) {
      return;
    }

    return localStorage.map((file, i) => {
      const { id, preview_url, original_name, file_size } = file;
      const typeName = original_name.split(".").slice(-1)[0].toUpperCase();

      const filePreviewError = (
        <li key={id || i} className={styles.imageItem}>
          <div className={styles.containerImage}>
            <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, id || String(i))} />
            <Icon width={24} height={32} glyph="file" />
            <Icon className={styles.position} width={10} height={16} glyph="exclamation" />
            <p className={styles.typeFile}>{typeName}</p>
          </div>
          <div className={styles.descriptionImage}>
            <p className={styles.textDesc}>{original_name}</p>
            <p className={`${styles.textDesc} ${styles.textColor}`}>{convertTo(file_size, convertType)}</p>
          </div>
        </li>
      );

      const imagePreview = (
        <li key={id} className={styles.imageItem}>
          <div className={styles.containerImage}>
            <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, id || String(i))} />
            <Image className={styles.image} width={32} height={32} src={preview_url || ""} alt={original_name} />
          </div>
        </li>
      );

      const filePreview = (
        <li key={id} className={styles.imageItem}>
          <div className={styles.containerImage}>
            <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, id || String(i))} />
            <Icon width={32} height={32} glyph="file" />
            <p className={styles.typeFile}>{typeName}</p>
          </div>
        </li>
      );

      // if (error) {
      //   return filePreviewError;
      // }

      if (preview_url) {
        return imagePreview;
      }

      if (!preview_url) {
        return filePreview;
      }
    });
  };

  return <ul className={cn(styles.containerImages, "scrollbar-x")}>{renderImages()}</ul>;
};
