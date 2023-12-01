import React from "react";
import classNames from "classnames/bind";

import styles from "./choose-this-producer.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { closeModal, setTypeModal } from "@src/redux/slices/modal-slice";

const cx = classNames.bind(styles);

export const ChooseThisProducer = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={cx("window")}>
            <div className={cx("wrapperText")}>
                <p className={cx("text", "marginBottom")}>
                    Вы выбираете этого исполнителя для заказа. После выбора остальным исполнителям придёт отказ, и вы не
                    сможете больше общаться с ними. С текущим исполнителем вы сможете связаться напрямую
                </p>
                <p className={cx("text", "fontWeightBold")}>Вы уверены, что выбираете этого исполнителя?</p>
            </div>
            <div className={cx("wrapperButton")}>
                <Button onClick={() => dispatch(setTypeModal("confirm"))}>
                    <p className={cx("text")}>Да, выбрать этого исполнителя</p>
                </Button>
                <Button className={cx("buttonClose")} variant="exit" onClick={() => dispatch(closeModal())}>
                    <p className={cx("text")}>Нет, вернуться к чату</p>
                </Button>
            </div>
        </div>
    );
};
