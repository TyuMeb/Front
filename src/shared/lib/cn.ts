import { twMerge } from "tailwind-merge";

export const cn = (...args: unknown[]) => {
  return twMerge(args.filter(Boolean).join(" "));
};
