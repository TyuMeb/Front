"use client";

import styles from "./slider.module.scss";
import cn from "classnames";
import { useState, FC } from "react";
import { CardExample, CardExampleProps } from "@src/shared/ui/card-example/card-example";
import { SliderControl } from "../sllder-control";

type SlideItem = {
    slideItems: Array<CardExampleProps>;
};

type SliderProps = {
    slides: Array<SlideItem>;
    disabled?: boolean;
};

export const Slider: FC<SliderProps> = ({ slides, disabled }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function slideForward() {
        slides && setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }

    function slideBackward() {
        slides && setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
    }

    return slides ? (
        <div className={styles.inner}>
            <h2 className={cn("title-h2", styles.title)}>Примеры работ</h2>
            <ul className={styles.examples}>
                {slides[currentSlide].slideItems.map((el, i) => (
                    <li className={styles.examples_item} key={i}>
                        <CardExample src={el.src} alt={el.alt} object={el.object} price={el.price} />
                        {!i && (
                            <SliderControl
                                onRightArrowClick={slideForward}
                                onLeftArrowClick={slideBackward}
                                disabled={disabled}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <></>
    );
};
