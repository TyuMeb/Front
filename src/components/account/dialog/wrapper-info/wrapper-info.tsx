"use client";

import React from "react";
import { openModal } from "@src/redux/slices/modal-slice";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { Button } from "@src/shared/ui/button";

import styles from "./wrapper-info.module.scss";
import { DialogProps } from "../dialog";

export type OrderInfo = {
  customer?: string;
  name: string;
  termOfExecution: string;
  price: string;
  index: number;
};

export type WrapperInfoProps = {
  getObserver: (node: HTMLDivElement) => void;
} & DialogProps;

export const WrapperInfo = ({ orderInfo, getObserver, ...props }: WrapperInfoProps) => {
  const dispatch = useAppDispatch();
  const { selectedPerformer } = useAppSelector((store) => store.account);

  const buildSelectedPerformer = () => {
    if (!selectedPerformer) {
      return (
        <Button className={styles.button} onClick={() => dispatch(openModal("chooseThisProducer"))}>
          <p className="text-medium">Выбрать этого исполнителя</p>
        </Button>
      );
    }

    return (
      <div className={styles.wrapperSelectedPerformer}>
        <ul className={styles.list}>
          <li className={styles.itemSelectedPerformer}>
            <p className="text-medium-semibold">E-mail: example@yandex.ru</p>
          </li>

          <li>
            <p className="text-medium-semibold">Телефон: +79025062076</p>
          </li>

          <li className={styles.itemSelectedPerformer}>
            <p className="text-medium-semibold">ИП Зверев Илья Владимирович</p>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.wrapperHead} ref={getObserver} {...props}>
      <div className={styles.line}>
        <div className={styles.info}>
          <div className={styles.infoPerformer}>
            <span className={styles.userIcon}></span>
            <h2 className="subtitle2">
              {!orderInfo.customer ? (
                <>
                  Чат с <span className={styles.fontWeight}>Исполнителем {orderInfo.index}</span>
                </>
              ) : (
                orderInfo.customer
              )}
            </h2>
          </div>
          <div className={styles.infoOrder}>
            <p className="text-small-semibold">{orderInfo.name}</p>
            <p className="text-small-semibold">
              Срок исполнения: &nbsp;
              {orderInfo.termOfExecution}
            </p>
            <p className="text-small-semibold">
              Стоимость: от &nbsp;
              {orderInfo.price}
            </p>
          </div>
        </div>

        {!orderInfo.customer && buildSelectedPerformer()}
      </div>
    </div>
  );
};
