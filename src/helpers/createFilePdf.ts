import { getRandomKey } from "@src/helpers";

export const createFilePdf = () => new File(["Hello, World!"], `${getRandomKey()}.pdf`, { type: "application/pdf" });
