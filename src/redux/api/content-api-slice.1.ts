import { apiSlice } from "./api-slice";
import { GalleryImages } from "./generated";

const contentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    gallery: build.query<GalleryImages[], void>({
      query: () => ({
        url: "/utils/gallery",
      }),
    }),
  }),
});

export const { useGalleryQuery } = contentApi;
