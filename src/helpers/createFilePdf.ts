export const createFilePdf = () => {
    return new Blob(["Hello, World!"], { type: "application/pdf" });
};
