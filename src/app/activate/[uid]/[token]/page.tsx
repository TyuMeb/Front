"use client";

import React, { useEffect } from "react";
import { Home } from "@src/components/home";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/slices/modal-slice";
import { useVerifyUserQuery } from "@src/redux/api/auth-api-slice";

export default function Page() {
    const params = useParams();
    const dispatch = useAppDispatch();
    const { error } = useVerifyUserQuery(params, { refetchOnReconnect: true });

    useEffect(() => {
        dispatch(openModal());
        dispatch(setTypeModal("resetPasswordConfirm"));
        console.log(params);
    }, []);

    if (error) {
        console.log("error", error);
    }

    return <Home />;
}
