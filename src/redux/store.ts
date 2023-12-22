"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal-slice";
import accountReducer from "./slices/account-slice";
import headerReducer from "./slices/header-slice";
import navAccountReducer from "./slices/nav-account-slice";
import headerAccountReducer from "./slices/header-account-slice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@src/redux/api/api-slice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        header: headerReducer,
        headeraccount: headerAccountReducer,
        nav: navAccountReducer,
        account: accountReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
