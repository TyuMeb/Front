"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@src/redux/hooks";

import { Modal } from "@src/components/modals/modal";
import { SignIn } from "@src/components/modals/signin";
import { Registration } from "@src/components/modals/registration";
import { ResetPasswordConfirm } from "@src/components/modals/reset-password-confirm";
import { ChooseThisProducer } from "@src/components/modals/choose-this-producer";
import { ResetPassword } from "@src/components/modals/reset-password";
import { Confirm } from "@src/components/modals/confirm";
import { ModalGetContact } from "./modal-get-contact/modal-get-contact";

export const Modals = () => {
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
      case "resetPasswordConfirm":
        return <ResetPasswordConfirm />;
      case "chooseThisProducer":
        return <ChooseThisProducer />;
      case "confirm":
        return <Confirm />;
      case "getContact":
        return <ModalGetContact />;
    }
  };

  return (
    <>
      <Modal isOpen={modal}>{constructModal()}</Modal>
    </>
  );
};
