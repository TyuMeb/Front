import { filesListProps } from "@src/components/account/form/formTypes";

export const getFiles = (filesList: filesListProps[]) => {
    const files = [] as { id: string; file: File }[];

    filesList.forEach((file) => {
        if (!file.error) {
            files.push({ id: file.id, file: file.file });
        }
    });

    return files;
};
