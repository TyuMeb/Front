import React, { useEffect } from "react";
import HomePage from "@src/app/page";
import { useRouter } from "next/router";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/modal-slice";

export default function HomePag() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTypeModal("resetPasswordConfirm"));
        dispatch(openModal());
    }, []);

    const router = useRouter();
    console.log(router.query);

    return (
        <>
            <HomePage />
        </>
    );
}
