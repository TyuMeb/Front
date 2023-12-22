"use client";

import { useAppDispatch } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";
import styles from "./create-order.module.scss";
import Link from "next/link";
import { openModal } from "@src/redux/slices/modal-slice";

export const CreateOrder = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.inner}>
            <p className={styles.paragraph}>Хотите сделать заказ сейчас? Мы ждем вас на ВайВи!</p>

            <Link href="/">
                <Button
                    onClick={() => {
                        dispatch(openModal("getContact"));
                    }}>
                    Сделать заказ
                </Button>
            </Link>
        </div>
    );
};
