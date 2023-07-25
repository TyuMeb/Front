import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const marketplaceApi = createApi({
    reducerPath: "MarketplaceApi",
    tagTypes: ["objects"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://185.244.173.82/",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).tokens.jwtToken;
            if (token) {
                headers.set("Authorization", `JWT ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (build) => ({}),
});
