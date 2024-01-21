"use client";

import React, { HTMLAttributes } from "react";
import styles from "./archives.module.scss";
import { OrderCard } from "@src/components/account/my-orders/order-card";
import { NoOrdersCard } from "@src/components/account/my-orders/no-orders-card";
import { filesListProps } from "@src/components/account/form/formTypes";
import { getFiles } from "@src/helpers";
import { SliderUser } from "@src/shared/ui/slider-user";
import { AddFiles } from "@src/components/account/my-orders/add-files";
import { Icon } from "src/components/icon";
import Image from "next/image";
import { useArchiveOrdersQuery } from "@src/redux/api/order-api-slice";

type ArchivesProps = {} & HTMLAttributes<HTMLDivElement>;

export const Archives = (props: ArchivesProps) => {
  const { data: orders = [] } = useArchiveOrdersQuery();

  const settingsInput = {
    maxSizeFile: 1000000,
    maxSizeImage: 100000,
    maxCountFiles: 6,
    multiple: true,
    accept: ".png, .jpg, .jpeg",
  };

  const onChangeHandler = (data: filesListProps[]) => {
    // TODO отправка на сервер изображения
    const files = getFiles(data);

    const formFiles = new FormData();
    files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

    console.log({ files, formData: formFiles });
  };

  const renderOrders = () => {
    return orders.map((order) => {
      return (
        <li key={order.id}>
          <OrderCard
            className={styles.backgroundColor}
            title={order.name!}
            notOffer={Math.random() > 0.5}
            description={{
              date: order.order_time!,
              countOffer: 1,
              status: order.state!,
            }}>
            {(order.files || []).length ? (
              <SliderUser className={styles.slider}>
                {((order.files || []) as string[]).map((file) => {
                  return (
                    <div key={file} className="keen-slider__slide">
                      <div className={styles.wrapper}>
                        <Image src={file} alt={order.name || ""} className={styles.sliderImage} />
                      </div>
                    </div>
                  );
                })}
              </SliderUser>
            ) : (
              <AddFiles className={styles.marginCenter} {...settingsInput} onChangeHandler={onChangeHandler}>
                <div className={styles.addPhoto}>
                  <Icon width={30} height={30} glyph={"plus"} />
                  <p className="text-small-semibold">Добавить фото</p>
                </div>
              </AddFiles>
            )}
          </OrderCard>
        </li>
      );
    });
  };

  return (
    <section className={styles.wrapperOrders} {...props}>
      {!orders.length && <NoOrdersCard />}

      <ul className={styles.wrapperOrders}>{renderOrders()}</ul>
    </section>
  );
};
