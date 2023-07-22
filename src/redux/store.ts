"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import tokensReducer from "./tokens-slice";
import { marketplaceApi } from "./marketplace-api/marketplace-api";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        tokens: tokensReducer,
        [marketplaceApi.reducerPath]: marketplaceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marketplaceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
