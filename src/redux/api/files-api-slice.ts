import { FileType, DeleteFile } from "@src/shared/types/files.types";
import { apiSlice } from "./api-slice";

const filesApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<FileType[], FormData>({
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
