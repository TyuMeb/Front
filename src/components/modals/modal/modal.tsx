import { FC, useEffect, MouseEvent, ReactNode } from "react";
import styles from "./modal.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { closeModal } from "@src/redux/modal-slice";

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
                <div onMouseDown={handleOverlay} className={styles.overlay}>
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
