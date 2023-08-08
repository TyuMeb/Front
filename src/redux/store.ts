"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";
import headerReducer from "./header-slice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        header: headerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
