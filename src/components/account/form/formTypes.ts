export type filesPreviewT = {
    id: string;
    error: boolean;
    type: "image" | "file";
    typeName: string;
    url: string;
    name: string;
    size: number;
    file: File;
};

export type filesListT = {
    file: File;
    id: string;
};
