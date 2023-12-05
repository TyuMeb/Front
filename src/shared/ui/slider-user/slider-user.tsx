import React, { FC, useState, useEffect, ReactNode } from "react";
import "keen-slider/keen-slider.min.css";
import { Button } from "../button";
import styles from "./slider-user.module.scss";
import { cn } from "@src/shared/lib/cn";
import { useSlider } from "@src/hooks/use-slider";
import { Icon } from "@src/components/icon";

type UserSliderT = {
    slides: Required<Array<ReactNode>>;
    itemsToShow?: number;
    variant?: "small" | "big";
};

export const SliderUser: FC<UserSliderT> = ({ slides, itemsToShow = 1, variant = "big" }) => {
    const [isVisible, setIsVisible] = useState(false);

    const { sliderRef, instanceRef, loaded } = useSlider({
        perView: itemsToShow,
        spacing: variant === "small" ? 20 : 8,
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    function slideForward() {
        instanceRef.current?.next();
    }

    function slideBackward() {
        instanceRef.current?.prev();
    }

    return (
        <section className={cn(styles.slider, isVisible ? styles.slider_visible : null)}>
            <div className={cn(styles.slider__content, variant === "small" && styles.slider__content_photo)}>
                {loaded && slides.length > itemsToShow && (
                    <Button
                        type="button"
                        icon={
                            <Icon
                                glyph={"arrowRight"}
                                width={7}
                                height={15}
                                viewBox="0 0 16 30"
                                transform="rotate(-180)"
                            />
                        }
                        variant={"slider"}
                        onClick={slideBackward}
                        className={styles.slider__btn}
                    />
                )}

                {
                    <div
                        ref={sliderRef}
                        className={cn("keen-slider", variant !== "small" && styles.slider__slider_wrapper)}>
                        {slides.map((item, i) => (
                            <div
                                className={cn(
                                    "keen-slider__slide",
                                    styles.slider__slide,
                                    variant === "small" && styles.slider__slide_photo
                                )}
                                key={i}>
                                {item}
                            </div>
                        ))}
                    </div>
                }

                {loaded && slides.length > itemsToShow && (
                    <Button
                        type="button"
                        icon={<Icon glyph={"arrowRight"} width={7} height={15} viewBox="0 0 16 30" />}
                        variant={"slider"}
                        onClick={slideForward}
                        className={styles.slider__btn}
                    />
                )}
            </div>
        </section>
    );
};
