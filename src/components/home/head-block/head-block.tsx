"use client";

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
            <h1 id="home" className={styles.title}>
              Создайте свой идеальный дом
            </h1>
            <p className={styles.description}>
              Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
            </p>
            <Button onClick={() => dispatch(openModal("getContact"))}>Сделать заказ</Button>
          </div>
        </div>
      </div>
    </>
  );
};
