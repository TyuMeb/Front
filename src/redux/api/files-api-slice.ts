import { apiSlice } from "./api-slice";

export type Files = {
  id?: string;
  original_name: string;
  file_size: number;
  preview_url?: string;
};

export interface DeleteFile {
  file_id: string;
}

const filesApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<Files[], FormData>({
      query: (body) => ({
        url: "/file/upload/",
        method: "POST",
        body: body,
      }),
    }),
    deleteFile: build.mutation<void, DeleteFile>({
      query: (body) => {
        return {
          url: "/file/delete/",
          method: "DELETE",
          body,
        };
      },
    }),
  }),
});

export const { useUploadFileMutation, useDeleteFileMutation } = filesApi;
