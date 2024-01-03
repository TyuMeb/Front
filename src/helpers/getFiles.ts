import { FilesList } from "@src/components/account/wrapper-form";

export const getFiles = (filesList: FilesList[]) => {
    const files = [] as { id: string; file: File }[];

    filesList.forEach((file) => {
        if (!file.error) {
            files.push({ id: file.id, file: file.file });
        }
    });

    return files;
};
