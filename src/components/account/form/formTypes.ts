export type filesPreviewProps = {
    id: string;
    error: boolean;
    type: "image" | "file";
    typeName: string;
    url: string;
    name: string;
    size: number;
    file: File;
};

export type filesListProps = {
    file: File;
    id: string;
};
