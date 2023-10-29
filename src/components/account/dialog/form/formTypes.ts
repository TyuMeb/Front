export type filesType = {
    id: string;
    error: boolean;
    type: "image" | "file";
    typeName: string;
    url?: string;
    name: string;
    size: number;
    file?: File;
};
