import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "@src/shared/config";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { setUser } from "../slices/users-slice";

const baseQuery = fetchBaseQuery({
  baseUrl: CONFIG.API_URL,
  prepareHeaders: (headers) => {
    const token = getCookie("access_token");

    if (token) {
      headers.set("Authorization", `JWT ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(
    typeof args === "string" ? { url: args, credentials: "include" } : { ...args, credentials: "include" },
    api,
    extraOptions
  );

  if (result.error && result.error.status === 401) {
    removeCookie("access_token");

    const refresh = getCookie("refresh_token");

    if (!refresh) {
      api.dispatch(setUser(null));
      return result;
    }

    const { data } = await baseQuery(
      {
        url: "/auth/jwt/refresh/",
        method: "POST",
        body: { refresh },
      },
      api,
      extraOptions
    );

    if (!data) {
      removeCookie("access_token");
      removeCookie("refresh_token");
      return result;
    }

    const access = (data as { access?: string })?.access;

    if (access) {
      setCookie("access_token", access);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setUser(null));
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
});
