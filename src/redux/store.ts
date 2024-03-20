"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modal-slice";
import modalNotifyReducer from "./slices/notify-modal-slice";
import accountReducer from "./slices/account-slice";
import headerReducer from "./slices/header-slice";
import navAccountReducer from "./slices/nav-account-slice";
import headerAccountReducer from "./slices/header-account-slice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@src/redux/api/api-slice";
import { userReducer } from "./slices/users-slice";
import { createOrderSlice } from "./slices/create-order-slice";
import { chatReducer } from "./slices/chat-slice";
import { filesReducer } from "./slices/files-slice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    modalNotify: modalNotifyReducer,
    header: headerReducer,
    headeraccount: headerAccountReducer,
    nav: navAccountReducer,
    account: accountReducer,
    user: userReducer,
    createOrder: createOrderSlice.reducer,
    chats: chatReducer,
    files: filesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
