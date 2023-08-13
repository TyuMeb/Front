"use client";

import React, { useEffect } from "react";
import { Home } from "@src/components/home";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/slices/modal-slice";
import { setPasswordResetConfirm } from "@src/redux/slices/query-params-slice";

export default function Page() {
    const params = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openModal());
        dispatch(setTypeModal("resetPasswordConfirm"));
        dispatch(setPasswordResetConfirm({ uid: params.uid, token: params.token }));
    }, []);

    return <Home />;
}
