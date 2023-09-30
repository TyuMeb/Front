"use client";

import Image from "next/image";
import { CardExample } from "@src/components/shared/ui/card-example/card-example";
import styles from "./examples.module.scss";
import cn from "classnames";
import { useState } from "react";

import { raleway } from '@src/styles/fonts';

export const Examples = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function forwardSlide() {
        setCurrentSlide((current) => {
            if (current < 1) return current + 1;
            else return 0;
        });
    }

    function backwardSlide() {
        setCurrentSlide((current) => {
            if (current > 0) return current - 1;
            else return 1;
        });
    }

    return (
        <div className={styles.inner}>
            <h2 className={cn(`${raleway.className} ${styles.title}`)}>Примеры работ</h2>
            <div className={styles.examples}>
                <div className={styles.leftSide}>
                    <div className={styles.top}>
                        <CardExample
                            width={388}
                            height={208}
                            src={`/home/s_slide${currentSlide}0.jpg`}
                            alt="logo-nightstand"
                            object="Полка"
                            price="1000 р"
                        />
                        <CardExample
                            width={388}
                            height={208}
                            src={`/home/s_slide${currentSlide}1.jpg`}
                            alt="logo-closet-sm"
                            object="Полка"
                            price="1000 р"
                        />
                    </div>
                    <CardExample
                        width={804}
                        height={326}
                        src={`/home/s_slide${currentSlide}2.jpg`}
                        alt="logo-kitchen"
                        object="Полка"
                        price="1000 р"
                    />
                </div>
                <div className={styles.rightSide}>
                    <CardExample
                        width={388}
                        height={444}
                        src={`/home/s_slide${currentSlide}3.jpg`}
                        alt="logo-closet-lg"
                        object="Полка"
                        price="1000 р"
                    />
                    <div className={styles.slider}>
                        <button className={styles.button} onClick={backwardSlide}>
                            <Image src="/home/arrow-left.svg" alt="arrow-left" width={14} height={32} />
                        </button>
                        <button className={styles.button} onClick={forwardSlide}>
                            <Image src="/home/arrow-right.svg" alt="arrow-right" width={14} height={32} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
