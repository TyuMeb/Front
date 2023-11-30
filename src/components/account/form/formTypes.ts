export type filesPreviewType = {
    id: string;
    error: boolean;
    type: "image" | "file";
    typeName: string;
    url: string;
    name: string;
    size: number;
    file: File;
};

export type filesListType = {
    file: File;
    id: string;
};
