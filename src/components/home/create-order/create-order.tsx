"use client";

import { Button } from "@src/components/shared/ui/button/button";

import styles from "./create-order.module.scss";
import React, { forwardRef } from "react";

const CreateOrder = forwardRef((createOrderRef) => {
    return (
        <div className={styles.inner} ref={(ref) => (createOrderRef ? createOrderRef : null)}>
            <p className={styles.paragraph}>Хотите сделать заказ сейчас? Мы ждем вас на ВайВи!</p>
            <Button onClick={() => {}}>Сделать заказ</Button>
        </div>
    );
});

CreateOrder.displayName = "CreateOrder";

export default CreateOrder;
