import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Image from "next/image";

import styles from "./preview-files.module.scss";
import { Icon } from "@src/components/icon";
import { filesPreviewT } from "@src/components/account/form/formTypes";

type convertT = "MB";

type PreviewFilesT = {
    files: filesPreviewT[];
    convertType?: convertT;
    setFilesPreview: Dispatch<SetStateAction<filesPreviewT[] | []>>;
};

export const PreviewFiles = ({ files, convertType = "MB", setFilesPreview }: PreviewFilesT) => {
    const removeHandlerFile = (event: MouseEvent<HTMLSpanElement>, id: string) => {
        const target = event.target as HTMLDivElement;
        if (target) {
            setFilesPreview((prevValue: filesPreviewT[]) => {
                const newArr = prevValue.filter((value) => value.id !== id);
                return newArr;
            });
        }
    };

    const converterValue = {
        MB: { size: 1000000, symbol: "mb" },
    };

    const convertTo = (size: number, convertType: convertT) => {
        const convertValue = (size / converterValue[convertType].size).toFixed(3);
        return `${convertValue} ${converterValue[convertType].symbol}`;
    };

    const renderImages = () =>
        files.map((file) => {
            const { id, error, name, typeName, type, url, size } = file;

            const filePreviewError = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, file.id)} />
                        <Icon width={24} height={32} glyph="file" />
                        <Icon className={styles.position} width={10} height={16} glyph="exclamation" />
                        <p className={styles.typeFile}>{typeName}</p>
                    </div>
                    <div className={styles.descriptionImage}>
                        <p className={styles.textDesc}>{name}</p>
                        <p className={`${styles.textDesc} ${styles.textColor}`}>{convertTo(size, convertType)}</p>
                    </div>
                </li>
            );

            const imagePreview = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, file.id)} />
                        <Image className={styles.image} width={32} height={32} src={url || ""} alt={name} />
                    </div>
                </li>
            );

            const filePreview = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span className={styles.crossDelete} onClick={(e) => removeHandlerFile(e, file.id)} />
                        <Icon width={32} height={32} glyph="file" />
                        <p className={styles.typeFile}>{typeName}</p>
                    </div>
                </li>
            );

            if (error) {
                return filePreviewError;
            }

            if (type === "image") {
                return imagePreview;
            }

            if (type === "file") {
                return filePreview;
            }
        });

    return <ul className={styles.containerImages}>{files && renderImages()}</ul>;
};
