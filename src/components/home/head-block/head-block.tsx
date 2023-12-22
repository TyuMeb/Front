"use client";

import Link from "next/link";
import styles from "./head-block.module.scss";
import { Button } from "@src/shared/ui/button";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/slices/modal-slice";

export const HeadBlock = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div>
                <div className={styles.banner}>
                    <div className="container">
                        <h1 className={styles.title}>Создайте свой идеальный дом</h1>
                        <p className={styles.description}>
                            Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
                        </p>
                        <Link href="/">
                            <Button onClick={() => dispatch(openModal("getContact"))}>Сделать заказ</Button>
                        </Link>{" "}
                    </div>
                </div>
            </div>
        </>
    );
};
