type CheckMaxSizeFiles = {
  file: File;
  maxSizeImage?: number;
  maxSizeFile?: number;
};

const checkMaxSizeFile = (file: File, maxSize: number) => {
  if (file.size >= maxSize) {
    return false;
  }

  return true;
};

export const checkMaxSizeFiles = ({ file, maxSizeImage, maxSizeFile }: CheckMaxSizeFiles) => {
  if (file.type.match("image") && maxSizeFile) {
    return checkMaxSizeFile(file, maxSizeFile);
  }

  if (!file.type.match("image") && maxSizeImage) {
    return checkMaxSizeFile(file, maxSizeImage);
  }
};
