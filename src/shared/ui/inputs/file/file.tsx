import React, { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction, forwardRef } from "react";

import styles from "./file.module.scss";
import { filesType } from "@src/components/account/form/formTypes";

export type FileInputI = {
    maxSizeImage?: number;
    maxSizeFile?: number;
    maxCountFiles?: number;
    countFiles: number;
    setFiles: Dispatch<SetStateAction<filesType[] | []>>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = forwardRef<HTMLInputElement, FileInputI>((props: FileInputI, ref) => {
    const {
        children,
        multiple = false,
        disabled = false,
        maxCountFiles,
        countFiles,
        maxSizeImage,
        maxSizeFile,
        setFiles,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange,
        ...restProps
    } = props;

    const saveFiles = (data: filesType) => {
        if (data.error) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { file, url, ...fileDataError } = data;
            setFiles((prevValue) => {
                const newArray = [...prevValue];
                newArray.push(fileDataError);
                return newArray;
            });
        }

        if (!data.error && multiple) {
            setFiles((prevValue) => {
                const newArray = [...prevValue];
                newArray.push(data);
                return newArray;
            });
        }

        if (!data.error && !multiple) {
            setFiles([data]);
        }
    };

    const changeHandlerFiles = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        if (target.files) {
            const files = Array.from(target.files);

            if (!files.length) {
                return;
            }

            files.forEach((file) => {
                const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

                const fileData = {
                    id: id,
                    error: false,
                    type: "image",
                    name: file.name.split(".")[0].toUpperCase(),
                    size: file.size,
                    url: "",
                    typeName: file.name.split(".").slice(-1)[0].toUpperCase(),
                    file: file,
                } as filesType;

                if (maxSizeImage && file.size > maxSizeImage && file.type.match("image")) {
                    fileData.error = true;
                }

                if (maxSizeFile && file.size > maxSizeFile && !file.type.match("image")) {
                    fileData.error = true;
                }

                if (!file.type.match("image")) {
                    fileData.type = "file";

                    saveFiles(fileData);
                }

                if (file.type.match("image")) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = (event) => {
                        if (event.target) {
                            fileData.url = event.target.result?.toString() || "";

                            saveFiles(fileData);
                        }
                    };

                    reader.onerror = () => {
                        fileData.error = true;

                        saveFiles(fileData);
                    };
                }
            });
        }
    };

    return (
        <label className={styles.wrapperFile}>
            <input
                ref={ref}
                type="file"
                className={styles.disabled}
                multiple={multiple}
                disabled={countFiles === maxCountFiles ? true : disabled}
                onChange={(e) => changeHandlerFiles(e)}
                {...restProps}
            />
            {children}
        </label>
    );
});

FileInput.displayName = "FileInput";
