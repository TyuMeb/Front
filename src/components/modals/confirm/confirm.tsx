import React from "react";
import classNames from "classnames/bind";

import styles from "./confirm.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { closeModal } from "@src/redux/slices/modal-slice";

const cx = classNames.bind(styles);

export const Confirm = () => {
  const dispatch = useAppDispatch();

  const handlerOnClick = () => {
    dispatch(closeModal());
  };

  return (
    <div className={cx("window")}>
      <p className={cx("text-medium", "text-center", "marginBottom")}>
        Поздравляем вас с выбором! Теперь у вас есть контакты исполнителя, они будут отображаться под его предложением в
        окне с вашей перепиской.
      </p>
      <Button className={cx("buttonClose")} onClick={handlerOnClick}>
        <p className="text-medium">Понятно</p>
      </Button>
    </div>
  );
};
