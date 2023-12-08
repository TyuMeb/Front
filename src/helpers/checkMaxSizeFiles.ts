type CheckMaxSizeFiles = {
    file: File;
    maxSizeImage?: number;
    maxSizeFile?: number;
};

export const checkMaxSizeFiles = ({ file, maxSizeImage, maxSizeFile }: CheckMaxSizeFiles) => {
    if (maxSizeImage && file.size >= maxSizeImage && file.type.match("image")) {
        return false;
    }

    if (maxSizeFile && file.size >= maxSizeFile && !file.type.match("image")) {
        return false;
    }

    return true;
};
