"use client";

import { useAppSelector } from "@src/redux/hooks";
import Modal from "@src/components/modals/modal/modal";

import SignIn from "@src/components/modals/signin/signin";
import { useEffect } from "react";

const Modals = () => {
    const { modal } = useAppSelector((store) => store.modal);

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

    return (
        <>
            <Modal isOpen={modal}>
                <SignIn />
            </Modal>
        </>
    );
};

export default Modals;
