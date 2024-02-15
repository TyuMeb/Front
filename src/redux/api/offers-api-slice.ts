import { apiSlice } from "./api-slice";
import { OrderOffer } from "./generated";

const offersApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    offers: build.query<OrderOffer[], void>({
      query: () => ({
        url: `offers`,
      }),
    }),
  }),
});

export const { useOffersQuery } = offersApi;

export { offersApi };
