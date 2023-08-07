"use client";

import React, { useEffect } from "react";
import { Home } from "@src/components/home";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/modal-slice";

export default function Page() {
    const params = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openModal());
        dispatch(setTypeModal("resetPasswordConfirm"));
        console.log(params);
    }, []);

    return <Home />;
}
