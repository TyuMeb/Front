"use client";

import React, { HTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./my-orders.module.scss";
import { OrderCard } from "@src/components/account/my-orders/order-card";
import { NoOrdersCard } from "@src/components/account/my-orders/no-orders-card";
import { AddFiles } from "@src/components/account/my-orders/add-files";
import { Icon } from "src/components/icon";
import { getFiles } from "@src/helpers";
import { filesListProps } from "@src/components/account/form/formTypes";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { SliderUser } from "@src/shared/ui/slider-user";

const orders = [
    {
        id: "1",
        title: "Полка настенная",
        notOffer: false,
        images: [desk, desk, slide],
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 4,
        },
    },
    {
        id: "2",
        title: "Комод",
        notOffer: true,
        images: [],
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
    {
        id: "3",
        title: "Комод",
        notOffer: false,
        images: [],
        description: {
            date: "24.04.2024",
            status: "сбор предложений окончен",
            countOffer: 0,
        },
    },
];

type MyOrdersProps = {} & HTMLAttributes<HTMLDivElement>;

export const MyOrders = (props: MyOrdersProps) => {
    const onChangeHandler = (data: filesListProps[]) => {
        // TODO отправка на сервер изображения
        const files = getFiles(data);

        const formFiles = new FormData();
        files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log({ files, formData: formFiles });
    };

    const settingsInput = {
        maxSizeFile: 1000000,
        maxSizeImage: 100000,
        maxCountFiles: 6,
        multiple: true,
        // accept=".png, .jpg, .jpeg"},
    };

    const renderOrders = () => {
        return orders.map((order) => {
            return (
                <li key={order.id}>
                    <OrderCard title={order.title} notOffer={order.notOffer} description={order.description}>
                        {order.images.length ? (
                            <div className={styles.wrapperSlider}>{renderSlider(order.images, order.title)}</div>
                        ) : (
                            <AddFiles {...settingsInput} onChangeHandler={onChangeHandler}>
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

    const renderSlider = (images: StaticImageData[], alt: string) => {
        return (
            <SliderUser>
                {images.map((image) => {
                    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
                    return <Image key={id} src={image} alt={alt} className={styles.image} />;
                })}
            </SliderUser>
        );
    };

    return (
        <section className={styles.wrapperOrders} {...props}>
            {orders.length ? <NoOrdersCard /> : <></>}

            {orders.length ? <ul className={styles.wrapperOrders}>{renderOrders()}</ul> : <></>}
        </section>
    );
};
