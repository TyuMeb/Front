"use client";

import { ReactNode, useEffect } from "react";
import { useLazyGetUserQuery } from "@src/redux/api/auth-api-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { setAuthorizing, setUser } from "@src/redux/slices/users-slice";
import { getCookie } from "typescript-cookie";
import { useUserOrder } from "@src/domains/create-order/hooks/use-user-order";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";

const HASH_KEY = "41632ca7458226825e7812f7500c33ced538de4a";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const [getUser] = useLazyGetUserQuery();

  useUserOrder();

  const showCookiesModal = () => {
    if (sessionStorage.getItem("KEY")) {
      return;
    }

    sessionStorage.setItem("KEY", HASH_KEY);
    dispatch(
      createNotifyModal({
        name: "cookies",
        delay: false,
      })
    );
  };

  useEffect(() => {
    if (!getCookie("access_token")) {
      showCookiesModal();
      return;
    }

    getUser()
      .unwrap()
      .then((data) => {
        dispatch(setUser(data || null));

        if (!Object.keys(data).length) {
          console.log("🚀 ~ file: app-layout.tsx:28 ~ useEffect ~ error:", "Объект пользователя пришел пустым");
          return;
        }

        dispatch(setAuthorizing(true));
      })
      .finally()
      .catch((error) => {
        console.log("🚀 ~ file: app-layout.tsx:36 ~ useEffect ~ error:", error);
      });
  }, [dispatch, getUser]);

  return children;
};
