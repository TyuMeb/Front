import React from "react";
import classNames from "classnames/bind";

import styles from "./choose-this-producer.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { closeModal, setTypeModal } from "@src/redux/slices/modal-slice";
import { setSelectedPerformer } from "@src/redux/slices/account-slice";

const cx = classNames.bind(styles);

export const ChooseThisProducer = () => {
  const dispatch = useAppDispatch();

  const handlerOnClickConfirm = () => {
    dispatch(setTypeModal("confirm"));
    dispatch(setSelectedPerformer());
  };

  const handlerOnClickClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={cx("window")}>
      <div>
        <p className={cx("text-medium", "text-center", "marginBottom")}>
          Вы выбираете этого исполнителя для заказа. После выбора остальным исполнителям придёт отказ, и вы не сможете
          больше общаться с ними. С текущим исполнителем вы сможете связаться напрямую
        </p>
        <p className={cx("text-medium", "text-center", "fontWeightBold")}>
          Вы уверены, что выбираете этого исполнителя?
        </p>
      </div>
      <div className={cx("wrapperButton")}>
        <Button onClick={handlerOnClickConfirm}>
          <p className="text-medium">Да, выбрать этого исполнителя</p>
        </Button>
        <Button className={cx("buttonClose")} variant="exit" onClick={handlerOnClickClose}>
          <p className="text-medium">Нет, вернуться к чату</p>
        </Button>
      </div>
    </div>
  );
};
