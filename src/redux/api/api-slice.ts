import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "@src/shared/config";
import { getCookie } from "typescript-cookie";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: CONFIG.API_URL,
        prepareHeaders: (headers) => {
            const token = getCookie("accessToken");

            if (token) {
                headers.set("Authorization", `JWT ${token}`);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
