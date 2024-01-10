import { Cookies } from "typescript-cookie";

const KEY = "ORDER_ID";

export const removeCookieOrder = () => {
    Cookies.remove(KEY);
};

export const storeCookieOrder = (id: number) => {
    Cookies.set(KEY, id);
};

export const getCookieOrder = () => {
    if (typeof window === "undefined") return;

    const id = Cookies.get(KEY);

    if (id) return Number(id);
};
