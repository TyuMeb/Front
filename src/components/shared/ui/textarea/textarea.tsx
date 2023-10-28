import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./textarea.module.scss";
import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { FileInput } from "@src/shared/ui/inputs/file/file";

const cx = classNames.bind(styles);

export interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    placeholder?: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

// TODO Оптимизировать
const setAutomaticHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement;

    if (textarea && textarea.clientHeight < 178) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
};

export const Textarea = (props: ITextareaProps) => {
    const { disabled, className, ...restProps } = props;

    const [images, setImages] = useState<
        | {
              id: string;
              error: boolean;
              type: "image" | "file";
              typeName: string;
              url: string;
              name: string;
              size: number;
          }[]
        | []
    >([]);

    const removeHandler = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (target) {
            setImages((prevValue) => {
                const newArr = prevValue.filter((value) => value.id !== target.id);
                return newArr;
            });
        }
    };

    const renderImages = () =>
        images.map((img) => {
            if (img.error === true) {
                return (
                    <li key={img.id} className={styles.imageItem}>
                        <div className={styles.containerImage}>
                            <span id={img.id} className={styles.crossDelete} onClick={removeHandler} />
                            <Icon width={24} height={32} glyph="file" />
                            <Icon className={styles.position} width={10} height={16} glyph="exclamation" />
                            <p className={styles.typeFile}>{img.typeName}</p>
                        </div>
                        <div className={styles.descriptionImage}>
                            <p className={styles.textDesc}>{img.name}</p>
                            <p className={`${styles.textDesc} ${styles.textColor}`}>{img.size} mb</p>
                        </div>
                    </li>
                );
            } else if (img.type === "image") {
                return (
                    <li key={img.id} className={styles.imageItem}>
                        <div className={styles.containerImage}>
                            <span id={img.id} className={styles.crossDelete} onClick={removeHandler} />
                            <Image className={styles.image} width={32} height={32} src={img.url} alt={img.name} />
                        </div>
                    </li>
                );
            } else if (img.type === "file") {
                return (
                    <li key={img.id} className={styles.imageItem}>
                        <div className={styles.containerImage}>
                            <span id={img.id} className={styles.crossDelete} onClick={removeHandler} />
                            <Icon width={32} height={32} glyph="file" />
                            <p className={styles.typeFile}>{img.typeName}</p>
                        </div>
                    </li>
                );
            }
        });

    return (
        <>
            <div className={cx("wrapper")}>
                <form className={cx("formChat")}>
                    <textarea
                        className={cx("textarea", "text", { disabled }, className)}
                        disabled={disabled}
                        onKeyDown={setAutomaticHeight}
                        {...restProps}
                    />

                    <FileInput setImages={setImages}>
                        <Paperclip />
                    </FileInput>

                    <Button className={styles.buttonSubmit}>
                        <Icon glyph="paper_airplane" />
                    </Button>
                </form>
            </div>
            <ul className={styles.containerImages}>{images && renderImages()}</ul>
        </>
    );
};
