import { FC, useEffect, MouseEvent, ReactNode } from "react";
import classNames from "classnames/bind";

import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { closeModal } from "@src/redux/slices/modal-slice";
import styles from "./modal.module.scss";

const cx = classNames.bind(styles);

interface IModal {
    children: ReactNode;
    isOpen: boolean;
}

const Modal: FC<IModal> = ({ children, isOpen }) => {
    const dispatch = useAppDispatch();
    const { typeModal } = useAppSelector((store) => store.modal);

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
                <div
                    onMouseDown={handleOverlay}
                    className={cx("wrapper", "overlayBlur", {
                        overlayDark: typeModal === "chooseThisProducer",
                        overlayNone: typeModal === "confirm",
                    })}>
                    <div className={styles.modal}>
                        <button className={styles.closeModal} onMouseUp={() => dispatch(closeModal())} />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
