import React, { ChangeEvent, HTMLAttributes } from "react";

import { FileInput } from "@src/shared/ui/inputs/file";
import { checkMaxSizeFiles } from "@src/helpers";
import { filesListProps } from "@src/components/account/form/formTypes";

type AddFilesProps = {
    maxSizeImage?: number;
    maxSizeFile?: number;
    maxCountFiles?: number;
    onChangeHandler: (data: filesListProps[]) => void;
} & HTMLAttributes<HTMLInputElement>;

export const AddFiles = ({ children, maxSizeImage, maxSizeFile, onChangeHandler, ...props }: AddFilesProps) => {
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

                fileList.push({ id: id, file, error: !checkMaxSizeFiles({ file, maxSizeImage, maxSizeFile }) });
            });

            onChangeHandler(fileList);
        }
    };

    return (
        <FileInput onChange={changeHandlerFiles} {...props}>
            {children}
        </FileInput>
    );
};
