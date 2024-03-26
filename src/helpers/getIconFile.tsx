import { Icon } from "@src/components/icon";

export const getIconFile = (type: string) => {
  if (type === "application/pdf") {
    return <Icon glyph="filePDF" />;
  }

  return <Icon glyph="file" />;
};
