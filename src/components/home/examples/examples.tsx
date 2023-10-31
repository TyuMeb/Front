"use client";

import styles from "./examples.module.scss";
import cn from "classnames";
import { useState } from "react";
import { CardExample } from "@src/shared/ui/card-example/card-example";
import { Slider } from "@src/shared/ui/slider";
import { useGalleryQuery } from "@src/redux/api/content-api-slice.1";

export const Examples = () => {
    const { data } = useGalleryQuery();
    const [currentSlide, setCurrentSlide] = useState<number>(1);

    const currentData = data?.filter(({ slider_number }) => slider_number === String(currentSlide));

    // need for correct sliding data
    const minSlide = Math.min(...(data || []).map(({ slider_number }) => Number(slider_number)));
    const maxSlide = Math.max(...(data || []).map(({ slider_number }) => Number(slider_number)));

    return (
        <div className={styles.inner} id="examples">
            <h2 className={cn("title-h2", styles.title)}>Примеры работ</h2>
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
                    <Slider
                        onClick={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
