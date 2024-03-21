import { useEffect, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import * as Dialog from "@radix-ui/react-dialog";

import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { closeModal } from "@src/redux/slices/modal-slice";
import styles from "./modal.module.scss";

const cx = classNames.bind(styles);

type ModalProps = {
  isOpen: boolean;
} & InputHTMLAttributes<HTMLDivElement>;

export const Modal = ({ children, isOpen }: ModalProps) => {
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

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={() => {
        dispatch(closeModal());
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className={cx("overlay", {
            overlayDark: typeModal === "chooseThisProducer",
            overlayNone: typeModal === "confirm",
          })}
        >
          <Dialog.Content className={cx("modal", { getContact: typeModal === "getContact" })}>
            <button type="button" className={styles.closeModal} onMouseUp={() => dispatch(closeModal())} />
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
