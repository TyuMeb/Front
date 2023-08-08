"use client";

import { FC, useEffect, MouseEvent, ReactNode } from "react";
import styles from "./modal.module.css";
import { useAppDispatch } from "@src/redux/hooks";
import { closeModal } from "@src/redux/slices/modal-slice";

interface IModal {
    children: ReactNode;
    isOpen: boolean;
}

const Modal: FC<IModal> = ({ children, isOpen }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const closeByEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                dispatch(closeModal());
            }
        };

        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, [isOpen, dispatch]);

    const handleOverlay = (e: MouseEvent) => {
        if (e.target === e.currentTarget) {
            dispatch(closeModal());
        }
    };

    return (
        <>
            {isOpen && (
                <div onClick={handleOverlay} className={styles.overlay}>
                    <div className={styles.modal}>{children}</div>
                </div>
            )}
        </>
    );
};

export default Modal;
