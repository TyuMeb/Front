import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "@src/shared/config";

export const marketplaceApi = createApi({
  reducerPath: "MarketplaceApi",
  tagTypes: ["authorization", "users"],
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.API_URL }),
  endpoints: () => ({}),
});
