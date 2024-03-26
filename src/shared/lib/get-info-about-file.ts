import { convertTo } from "@src/shared/lib/convert-to";
import { converterValue } from "@src/shared/constants/converter-file-value";

const convertValue = (size: number) => {
  const convertToMB = convertTo({ size, convertType: "MB" });
  if (convertToMB > 1) {
    return `${convertTo({ size, convertType: "MB" }).toFixed(1)} ${converterValue["MB"].symbol}`;
  }

  return `${convertTo({ size, convertType: "KB" }).toFixed(1)} ${converterValue["KB"].symbol}`;
};

export const getInfoAboutFile = ({ name, fileSize }: { name: string; fileSize: number }) => ({
  typeName: name.split(".").pop() || "",
  name: name.split(".")[0].toLowerCase(),
  size: convertValue(fileSize),
});
