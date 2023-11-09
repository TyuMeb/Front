import React, { FC, useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useSlider } from "@src/hooks/use-slider";
import styles from "./slider-example.module.scss";
import { cn } from "@src/shared/lib/cn";
import { CardExample, CardExampleProps } from "@src/shared/ui/card-example/card-example";
import { SliderControl } from "../sllder-control/slider-control";

type SlideItem = {
    items: Array<CardExampleProps>;
};

type SliderProps = {
    slides: Array<SlideItem>;
    disabled?: boolean;
    delay?: number;
    slideRight?: boolean;
    auto?: boolean;
};

export const SliderExample: FC<SliderProps> = ({
    slides,
    disabled = false,
    delay = 4,
    slideRight = false,
    auto = true,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const slider1 = useSlider({ disabled: disabled, rtl: slideRight });
    const slider2 = useSlider({ disabled: disabled, rtl: slideRight });
    const slider3 = useSlider({ disabled: disabled, rtl: slideRight });
    const slider4 = useSlider({ disabled: disabled, rtl: slideRight });

    const sliders = [slider1, slider2, slider3, slider4];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        let timer: number;
        if (!disabled && auto) {
            timer = window.setTimeout(() => {
                sliders.forEach((slider) => !slider.isOver && slider.instanceRef.current?.next());
            }, delay * 1000);
            return () => {
                window.clearTimeout(timer);
            };
        }
    });

    function slideForward() {
        if (slides && !disabled) {
            sliders.forEach((slider) => slider.instanceRef.current?.next());
        }
    }

    function slideBackward() {
        if (slides && !disabled) {
            sliders.forEach((slider) => slider.instanceRef.current?.prev());
        }
    }

    return (
        <main className={cn(styles.slider, isVisible ? styles.slider_visible : null)}>
            <div className={styles.slider__content}>
                {sliders.map((slideItem, i) => (
                    <div
                        ref={slideItem.sliderRef}
                        className={cn("keen-slider", styles.slider__slideContainer)}
                        key={123 + i}>
                        {slides[i].items &&
                            slides[i].items.map((item) => (
                                <div className="keen-slider__slide" key={item.id}>
                                    <CardExample
                                        src={item.src}
                                        alt={item.alt}
                                        object={item.object}
                                        price={item.price}
                                        id={item.id}
                                    />
                                </div>
                            ))}
                    </div>
                ))}
                <div className={styles.slider__controlsContainer}>
                    {sliders.reduce((res, slider) => res && slider.loaded && !!slider.instanceRef.current, true) && (
                        <SliderControl
                            onRightArrowClick={slideForward}
                            onLeftArrowClick={slideBackward}
                            disabled={disabled}
                        />
                    )}
                </div>
            </div>
        </main>
    );
};
