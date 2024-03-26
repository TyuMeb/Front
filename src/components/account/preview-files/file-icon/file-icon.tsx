import { Icon } from "@src/components/icon";

export const FileIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "pdf":
      return <Icon glyph="filePDF" />;
    case "xls" || "xlsx":
      return <Icon glyph="fileXLS" />;
    case "doc" || "docx":
      return <Icon glyph="fileDOC" />;
    case "txt":
      return <Icon glyph="fileTXT" />;
    default:
      return <Icon glyph="file" />;
  }
};
