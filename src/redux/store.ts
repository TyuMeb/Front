"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal-slice";
import headerReducer from "./slices/header-slice";
import queryReducer from "@src/redux/slices/query-params-slice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@src/redux/api/api-slice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        header: headerReducer,
        query: queryReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
