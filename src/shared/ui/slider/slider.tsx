"use client";

import styles from "./Slider.module.scss";
import cn from "classnames";
import { useState, useEffect, FC } from "react";
import { CardExample, CardExampleProps } from "@src/shared/ui/card-example/card-example";
import { SliderControl } from "../SliderControl";

type SlideItem = {
    slideItems: Array<CardExampleProps>;
};

type SliderProps = {
    slides: Array<SlideItem>;
};

export const Slider: FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function slideForward() {
        slides && setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
        console.log(currentSlide);
    }

    function slideBackward() {
        slides && setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
        console.log(currentSlide);
    }

    console.log(slides[0]);

    return slides ? (
        <div className={styles.inner}>
            <h2 className={cn("title-h2", styles.title)}>Примеры работ</h2>
            <ul className={styles.examples}>
                <li className={styles.examples_small1}>
                    {slides[currentSlide].slideItems[3] && (
                        <CardExample
                            src={slides[currentSlide].slideItems[0].src}
                            alt={slides[currentSlide].slideItems[0].alt}
                            object={slides[currentSlide].slideItems[0].object}
                            price={slides[currentSlide].slideItems[0].price}
                        />
                    )}
                </li>
                <li className={styles.examples_small2}>
                    {slides[currentSlide].slideItems[1] && (
                        <CardExample
                            src={slides[currentSlide].slideItems[1].src}
                            alt={slides[currentSlide].slideItems[1].alt}
                            object={slides[currentSlide].slideItems[1].object}
                            price={slides[currentSlide].slideItems[1].price}
                        />
                    )}
                </li>
                <li className={styles.examples_right}>
                    {slides[currentSlide].slideItems[2] && (
                        <CardExample
                            src={slides[currentSlide].slideItems[2].src}
                            alt={slides[currentSlide].slideItems[2].alt}
                            object={slides[currentSlide].slideItems[2].object}
                            price={slides[currentSlide].slideItems[2].price}
                        />
                    )}
                    <SliderControl onRightArrowClick={slideForward} onLeftArrowClick={slideBackward} />
                </li>
                <li className={styles.examples_big}>
                    {slides[currentSlide].slideItems[3] && (
                        <CardExample
                            src={slides[currentSlide].slideItems[3].src}
                            alt={slides[currentSlide].slideItems[3].alt}
                            object={slides[currentSlide].slideItems[3].object}
                            price={slides[currentSlide].slideItems[3].price}
                        />
                    )}
                </li>
            </ul>
        </div>
    ) : null;
};
