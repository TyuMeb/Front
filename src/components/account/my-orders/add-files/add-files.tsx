import React, { ChangeEvent, HTMLAttributes } from "react";

import { FileInput } from "@src/shared/ui/inputs/file";
import { checkMaxSizeFiles } from "@src/helpers";
import { filesListProps } from "@src/components/account/form/formTypes";
import { getRandomKey } from "@src/helpers/getRandomKey";

type AddFilesProps = {
    maxSizeImage?: number;
    maxSizeFile?: number;
    maxCountFiles?: number;
    onChangeHandler: (data: filesListProps[]) => void;
} & HTMLAttributes<HTMLInputElement>;

export const AddFiles = ({
    children,
    maxSizeImage,
    maxSizeFile,
    maxCountFiles,
    onChangeHandler,
    ...props
}: AddFilesProps) => {
    const changeHandlerFiles = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        if (target.files) {
            const files = Array.from(target.files);

            if (!files.length) {
                return;
            }

            const fileList = [] as filesListProps[];
            files.forEach((file, i) => {
                if (maxCountFiles && i >= maxCountFiles) {
                    return;
                }

                fileList.push({
                    id: getRandomKey(),
                    file,
                    error: !checkMaxSizeFiles({ file, maxSizeImage, maxSizeFile }),
                });
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
