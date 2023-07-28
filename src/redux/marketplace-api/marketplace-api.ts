import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// const baseQuery = fetchBaseQuery({
//     baseUrl: "http://185.244.173.82/",
//     prepareHeaders: (headers, { getState }) => {
//         const jwtToken = (getState() as RootState).tokens.jwtToken;
//         if (jwtToken) {
//             headers.set("Authorization", `JWT ${jwtToken}`);
//         }
//         return headers;
//     },
// });

export const marketplaceApi = createApi({
    reducerPath: "MarketplaceApi",
    tagTypes: ["authorization", "users"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://185.244.173.82" }),
    endpoints: (build) => ({}),
});
