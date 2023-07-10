import { apiSlice } from "./api-slice";

export const anotherApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "/users?_limit_10",
        }),
    }),
});

export const { useGetUsersQuery } = anotherApiSlice;
