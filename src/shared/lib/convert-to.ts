import { converterValue } from "@src/shared/constants/converter-file-value";

export const convertTo = ({ size, convertType }: { size: number; convertType: "MB" | "KB" }) =>
  size / converterValue[convertType].size;
