"use client";

import { useAppSelector } from "@src/redux/hooks";
import Modal from "@src/components/modals/modal/modal";

import SignIn from "@src/components/modals/signin";
import Registration from "@src/components/modals/registration";
import ResetPassword from "@src/components/modals/reset-password";
import React, { useEffect } from "react";

const Modals = () => {
    const { modal, typeModal } = useAppSelector((store) => store.modal);

    useEffect(() => {
        if (modal) {
            const x = window.scrollX;
            const y = window.scrollY;
            window.onscroll = () => {
                window.scrollTo(x, y);
            };
        } else {
            window.onscroll = () => {};
        }
    }, [modal]);

    const constructModal = () => {
        switch (typeModal) {
            case "signIn":
                return <SignIn />;
            case "registration":
                return <Registration />;
            case "resetPassword":
                return <ResetPassword />;
            default:
                return <></>;
        }
    };

    return (
        <>
            <Modal isOpen={modal}>{constructModal()}</Modal>
        </>
    );
};

export default Modals;
