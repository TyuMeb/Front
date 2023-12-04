import React, { ChangeEvent, Dispatch, InputHTMLAttributes, SetStateAction, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./file.module.scss";
import { filesPreviewT } from "@src/components/account/form/formTypes";

const cx = classNames.bind(styles);

export type FileInputI = {
    maxSizeImage?: number;
    maxSizeFile?: number;
    maxCountFiles?: number;
    setFilesPreview: Dispatch<SetStateAction<filesPreviewT[] | []>>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = (props: FileInputI) => {
    const {
        children,
        multiple = false,
        disabled = false,
        maxCountFiles,
        maxSizeImage,
        maxSizeFile,
        setFilesPreview,
        name,
        ...restProps
    } = props;

    const fileRef = useRef(null);

    const checkMaxSizeFiles = (file: File | filesPreviewT) => {
        if (maxSizeImage && file.size >= maxSizeImage && file.type.match("image")) {
            return false;
        }

        if (maxSizeFile && file.size >= maxSizeFile && !file.type.match("image")) {
            return false;
        }

        return true;
    };

    const saveFiles = (data: filesPreviewT) => {
        if (data.error) {
            setFilesPreview((prevValue) => {
                const newArray = [...prevValue];
                newArray.push(data);
                if (maxCountFiles && newArray.length > maxCountFiles) {
                    return newArray.slice(0, maxCountFiles);
                }
                return newArray;
            });
        }

        if (!data.error && multiple) {
            setFilesPreview((prevValue) => {
                const newArray = [...prevValue];
                newArray.push(data);
                if (maxCountFiles && newArray.length > maxCountFiles) {
                    return newArray.slice(0, maxCountFiles);
                }
                return newArray;
            });
        }

        if (!data.error && !multiple) {
            setFilesPreview([data]);
        }
    };

    const changeHandlerFiles = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        if (target.files) {
            const files = Array.from(target.files);

            if (!files.length) {
                return;
            }

            const fileList = [] as { file: File; id: string; error: boolean }[];
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
                } as filesPreviewT;

                fileData.error = !checkMaxSizeFiles(file);

                fileList.push({ id: id, file, error: fileData.error });

                if (!file.type.match("image")) {
                    fileData.type = "file";

                    saveFiles(fileData);
                }

                if (file.type.match("image")) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = (event) => {
                        fileData.url = event.target?.result?.toString() || "";

                        saveFiles(fileData);
                    };

                    reader.onerror = () => {
                        fileData.error = true;

                        saveFiles(fileData);
                    };
                }
            });
        }

        // Предотвращает баг, повторной загрузки той же картинки
        const inputFile = document.getElementById("input-file") as HTMLInputElement;
        if (inputFile) {
            inputFile.value = "";
        }
    };

    return (
        <label className={cx("wrapperFile", { disabled })}>
            <input
                ref={fileRef}
                type="file"
                className={cx("inputFile")}
                multiple={multiple}
                disabled={disabled}
                onChange={changeHandlerFiles}
                id="input-file"
                {...restProps}
            />
            {children}
        </label>
    );
};
