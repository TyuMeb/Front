type CheckMaxSizeFiles = {
  file: File;
  maxSizeImage?: number;
  maxSizeFile?: number;
};

export const exceedsMaximumSize = ({ file, maxSizeImage, maxSizeFile }: CheckMaxSizeFiles) => {
  if (file.type.match("image") && maxSizeImage) {
    return file.size > maxSizeImage;
  }

  if (!file.type.match("image") && maxSizeFile) {
    return file.size > maxSizeFile;
  }

  return false;
};
