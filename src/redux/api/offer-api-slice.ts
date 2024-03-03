import { apiSlice } from "./api-slice";
import { OfferModel } from "./generated";

const offerApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    executorOffers: build.query<OfferModel[], void>({
      query: () => ({
        url: `/offers/`,
      }),
    }),
  }),
});

export const { useExecutorOffersQuery } = offerApi;

export { offerApi };
