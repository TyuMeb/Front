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
  size,
  convertType,
}: {
  originalName: string;
  size: number;
  convertType: convert;
}) => {
  return {
    typeName: originalName.split(".").slice(-1)[0].toUpperCase(),
    name: originalName.split(".")[0].toLowerCase(),
    fileSize: convertTo(size, convertType),
  };
};
