type convert = "MB";

const converterValue = {
  MB: { size: 1000000, symbol: "mb" },
};

const convertTo = (size: number, convertType: convert) => {
  const convertValue = (size / converterValue[convertType].size).toFixed(3);
  return `${convertValue} ${converterValue[convertType].symbol}`;
};

export const getInfoAboutFile = ({
  originalName,
  fileSize,
  convertType,
}: {
  originalName: string;
  fileSize: number;
  convertType: convert;
}) => {
  return {
    typeName: originalName.split(".").slice(-1)[0].toUpperCase(),
    name: originalName.split(".")[0].toLowerCase(),
    size: convertTo(fileSize, convertType),
  };
};
