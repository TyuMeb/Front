import React, { Dispatch, SetStateAction, MouseEvent } from "react";
import Image from "next/image";

import styles from "./previewFiles.module.scss";
import { Icon } from "@src/components/icon";
import { filesType } from "../formTypes";

interface PreviewFilesI {
    files: filesType[];
    setFiles: Dispatch<SetStateAction<filesType[] | []>>;
}

const PreviewFiles = ({ files, setFiles }: PreviewFilesI) => {
    const removeHandlerFile = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target) {
            setFiles((prevValue: filesType[]) => {
                const newArr = prevValue.filter((value) => value.id !== target.id);
                return newArr;
            });
        }
    };

    const convertToMb = (size: number) => (size / 1000000).toFixed(3);

    const renderImages = () =>
        files.map((file) => {
            const { id, error, name, typeName, type, url, size } = file;

            const filePreviewError = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span id={id} className={styles.crossDelete} onClick={removeHandlerFile} />
                        <Icon width={24} height={32} glyph="file" />
                        <Icon className={styles.position} width={10} height={16} glyph="exclamation" />
                        <p className={styles.typeFile}>{typeName}</p>
                    </div>
                    <div className={styles.descriptionImage}>
                        <p className={styles.textDesc}>{name}</p>
                        <p className={`${styles.textDesc} ${styles.textColor}`}>{convertToMb(size)} mb</p>
                    </div>
                </li>
            );

            const imagePreview = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span id={id} className={styles.crossDelete} onClick={removeHandlerFile} />
                        <Image className={styles.image} width={32} height={32} src={url || ""} alt={name} />
                    </div>
                </li>
            );

            const filePreview = (
                <li key={id} className={styles.imageItem}>
                    <div className={styles.containerImage}>
                        <span id={id} className={styles.crossDelete} onClick={removeHandlerFile} />
                        <Icon width={32} height={32} glyph="file" />
                        <p className={styles.typeFile}>{typeName}</p>
                    </div>
                </li>
            );

            if (error) {
                return filePreviewError;
            }

            if (!error && type === "image") {
                return imagePreview;
            }

            if (!error && type === "file") {
                return filePreview;
            }
        });

    return <ul className={styles.containerImages}>{files && renderImages()}</ul>;
};

export default PreviewFiles;
