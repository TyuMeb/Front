"use client";

import { ReactNode, useEffect } from "react";
import { useLazyGetUserQuery } from "@src/redux/api/auth-api-slice";
import { useAppDispatch } from "@src/redux/hooks";
import { setAuthorizing, setUser } from "@src/redux/slices/users-slice";

export const AppLayout = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();

    const [getUser] = useLazyGetUserQuery();

    useEffect(() => {
        getUser()
            .unwrap()
            .then((data) => {
                dispatch(setUser(data || null));
            })
            .finally(() => {
                dispatch(setAuthorizing(false));
            });
    }, [dispatch, getUser]);

    return children;
};
