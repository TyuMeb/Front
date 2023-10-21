export const cn = (...args: unknown[]) => {
    return args.filter(Boolean).join(" ");
};
