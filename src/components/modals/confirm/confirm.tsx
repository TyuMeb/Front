import React from "react";
import classNames from "classnames/bind";

import styles from "./confirm.module.scss";
import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import { closeModal } from "@src/redux/slices/modal-slice";

const cx = classNames.bind(styles);

const Confirm = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={cx("window")}>
            <p className={cx("text", "marginBottom")}>
                Поздравляем вас с выбором! Теперь у вас есть контакты исполнителя, они будут отображаться под его
                предложением в окне с вашей перепиской.
            </p>
            <Button className={cx("buttonClose")} onClick={() => dispatch(closeModal())}>
                <p className={cx("text")}>Понятно</p>
            </Button>
        </div>
    );
};

export default Confirm;