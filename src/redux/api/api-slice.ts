import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://185.244.173.82" }),
    tagTypes: ["Users"],
    endpoints: () => ({}),
});
