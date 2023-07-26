interface IOptions {
    samesite?: "strict" | "lax";
    domain?: string;
    path?: string;
}

interface IGetOptions extends IOptions {
    "max-age": number;
    secure: true;
}

export const getCookie = (name: string) => {
    let matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string, expires = 10, options: IOptions = {}) => {
    const getOptions: IGetOptions = {
        "max-age": expires,
        secure: true,
        samesite: options.samesite || "lax",
        ...options,
    };

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in getOptions) {
        updatedCookie += "; " + optionKey;

        const optionValue = getOptions[optionKey as keyof IGetOptions];

        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
};

export const deleteCookie = (name: string) => {
    setCookie(name, "", -1);
};
