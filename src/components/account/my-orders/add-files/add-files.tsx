import React, { ChangeEvent, HTMLAttributes } from "react";

import { FileInput } from "@src/shared/ui/inputs/file";
import { checkMaxSizeFiles } from "@src/helpers";
import { randomKey } from "@src/helpers";
import { FilesPreviewList } from "@src/shared/types/files.types";

type AddFilesProps = {
  maxSizeImage?: number;
  maxSizeFile?: number;
  maxCountFiles?: number;
  onChangeHandler: (data: FilesPreviewList[]) => void;
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

      const fileList = [] as FilesPreviewList[];
      files.forEach((file, i) => {
        if (maxCountFiles && i >= maxCountFiles) {
          return;
        }

        fileList.push({
          id: randomKey(),
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
