"use client";

import React, { HTMLAttributes } from "react";
import styles from "./archives.module.scss";
import { OrderCard } from "@src/components/account/my-orders/order-card";
import { NoOrdersCard } from "@src/components/account/my-orders/no-orders-card";
import { filesListProps } from "@src/components/account/form/formTypes";
import desk from "@public/account/desk.jpg";
import slide from "@public/home/s_slide00.jpg";
import { getFiles } from "@src/helpers";
import { SliderUser } from "@src/shared/ui/slider-user";
import { AddFiles } from "@src/components/account/my-orders/add-files";
import { Icon } from "src/components/icon";
import Image, { StaticImageData } from "next/image";

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

type ArchivesProps = {} & HTMLAttributes<HTMLDivElement>;

export const Archives = (props: ArchivesProps) => {
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
                        title={order.title}
                        notOffer={order.notOffer}
                        description={order.description}>
                        {order.images.length ? (
                            renderSlider(order.images, order.title)
                        ) : (
                            <AddFiles
                                className={styles.marginCenter}
                                {...settingsInput}
                                onChangeHandler={onChangeHandler}>
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
            <SliderUser className={styles.slider}>
                {images.map((image) => {
                    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
                    return (
                        <div key={id} className="keen-slider__slide">
                            <div className={styles.wrapper}>
                                <Image src={image} alt={alt} className={styles.sliderImage} />
                            </div>
                        </div>
                    );
                })}
            </SliderUser>
        );
    };

    return (
        <section className={styles.wrapperOrders} {...props}>
            {!orders.length && <NoOrdersCard />}

            <ul className={styles.wrapperOrders}>{renderOrders()}</ul>
        </section>
    );
};
