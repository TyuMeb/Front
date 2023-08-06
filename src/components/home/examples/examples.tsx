"use client";
import Image from "next/image";

import { CardExample } from "@src/components/shared/ui/card-example/card-example";

import styles from "./examples.module.scss";

export const Examples = () => {
    return (
        <div className={styles.inner}>
            <h2 className={`title-h2 ${styles.title}`}>Примеры работ</h2>
            <div className={styles.examples}>
                <div className={styles.leftSide}>
                    <div className={styles.top}>
                        <CardExample
                            width={388}
                            height={208}
                            src="/home/nightstand.jpg"
                            alt="logo-nightstand"
                            object="Полка"
                            price="1000 р"
                        />
                        <CardExample
                            width={388}
                            height={208}
                            src="/home/closet-sm.jpg"
                            alt="logo-closet-sm"
                            object="Полка"
                            price="1000 р"
                        />
                    </div>
                    <CardExample
                        width={804}
                        height={326}
                        src="/home/kitchen.jpg"
                        alt="logo-kitchen"
                        object="Полка"
                        price="1000 р"
                    />
                </div>
                <div className={styles.rightSide}>
                    <CardExample
                        width={388}
                        height={444}
                        src="/home/closet-lg.jpg"
                        alt="logo-closet-lg"
                        object="Полка"
                        price="1000 р"
                    />
                    <div className={styles.slider}>
                        <a>
                            <Image src="/home/arrow-left.svg" alt="arrow-left" width={14} height={32} />
                        </a>
                        <a href="#">
                            <Image src="/home/arrow-right.svg" alt="arrow-right" width={14} height={32} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
