"use client";

import React, { HTMLAttributes } from "react";

import { NoCard } from "@src/components/account/card/no-card";
import { Button } from "@src/shared/ui/button";
import { Card } from "@src/components/account/card";
import { ListItem } from "@src/components/account/card/list-item";

import styles from "./my-offer.module.scss";
import Link from "next/link";
import { myOffers, MyOffers, OfferType } from "@src/shared/data/performer-account";
import { Slider } from "@src/components/account/slider";

type MyOfferProps = {} & HTMLAttributes<HTMLDivElement>;

const cardList = (offer: MyOffers) => {
    return [
        {
            name: "Дата заказа:",
            value: <time>{offer.description.date}</time>,
        },
        {
            name: "Стоимость:",
            value: offer.description.price,
        },
        {
            name: "Срок исполнения:",
            value: offer.description.termOfExecution,
        },
        {
            name: "Предложения:",
            value: offer.description.countOffer,
        },
        {
            name: "Задача:",
            value: offer.description.task,
        },
        {
            name: "Файл с ТЗ",
            files: offer.files,
        },
    ];
};

const renderButton = (offerType: OfferType) => {
    const linksEll = (
        <Link href="#">
            <Button className="text-small">Перейти к чату</Button>
        </Link>
    );

    if (offerType === "processing") {
        return linksEll;
    }

    if (offerType === "notSelected") {
        return (
            <div className={styles.wrapperButton}>
                {linksEll}

                <Button className="text-small" variant="cancel" onClick={() => {}}>
                    Перенести в архив
                </Button>
            </div>
        );
    }
};

export const MyOffer = (props: MyOfferProps) => {
    const renderOrders = () => {
        return myOffers.map((offer) => {
            return (
                <li key={offer.id}>
                    <Card>
                        <div className="wrapperHead">
                            <div className={styles.wrapperTitle}>
                                <span
                                    className={`${styles.statusIcon}
                                    ${offer.offerType === "processing" && styles.backgroundBrown}
                                    ${offer.offerType === "notReviewed" && styles.backgroundGreen}
                                    ${offer.offerType === "notSelected" && styles.backgroundPink}`}
                                />
                                <h2 className="subtitle2">{offer.name}</h2>
                            </div>

                            {offer.offerType && (
                                <div className={styles.wrapperMenu}>
                                    <p className="text-small-semibold">
                                        {offer.offerType === "processing" && (
                                            <span className={styles.colorGreen}>
                                                Ваше предложение находится в рассмотрении
                                            </span>
                                        )}
                                        {offer.offerType === "notReviewed" && (
                                            <span className={styles.colorYellow}>
                                                Ваше предложение пока не было рассмотрено
                                            </span>
                                        )}
                                        {offer.offerType === "notSelected" && (
                                            <span className={styles.colorPink}>
                                                К сожалению, ваше предложение не было выбрано
                                            </span>
                                        )}
                                    </p>
                                    <button className={styles.menuCard}>
                                        <span className={styles.dots}></span>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="wrapperList">
                            <ul className="list">
                                {cardList(offer).map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <ListItem description={item} />
                                        </li>
                                    );
                                })}
                            </ul>

                            {offer.images?.length ? <Slider images={offer.images} alt={offer.name} /> : <></>}
                        </div>

                        <div className={styles.wrapperButton}>{renderButton(offer.offerType)}</div>
                    </Card>
                </li>
            );
        });
    };

    return (
        <section className={styles.wrapperOffer} {...props}>
            {!myOffers.length ? (
                <NoCard
                    name={
                        <>
                            Вы пока не сделали ни одного предложения.
                            <br />
                            Но вы всегда можете исправить это, перейдя к заказам клиентов.
                        </>
                    }>
                    <Link href="#">Перейти к заказам</Link>
                </NoCard>
            ) : (
                <></>
            )}

            {myOffers.length ? <ul className={styles.wrapperOffer}>{renderOrders()}</ul> : <></>}
        </section>
    );
};
