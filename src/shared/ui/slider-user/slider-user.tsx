import React, { FC, useState, useEffect, HTMLAttributes, Children, ReactElement, cloneElement } from "react";
import "keen-slider/keen-slider.min.css";
import { Button } from "../button";
import styles from "./slider-user.module.scss";
import { cn } from "@src/shared/lib/cn";
import { useSlider } from "@src/hooks/use-slider";
import { Icon } from "@src/components/icon";

type UserSliderProps = {
    itemsToShow?: number;
    variant?: "small" | "big";
    children: ReactElement[];
} & HTMLAttributes<HTMLDivElement>;

export const SliderUser: FC<UserSliderProps> = ({
    itemsToShow = 1,
    variant = "big",
    children,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const { sliderRef, instanceRef, loaded } = useSlider({
        perView: itemsToShow,
        spacing: variant === "small" ? 18 : 8,
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
        <section className={cn(styles.slider, isVisible ? styles.slider_visible : null, className)} {...props}>
            <div className={cn(styles.slider__content, variant === "small" && styles.slider__content_photo)}>
                {loaded && children.length > itemsToShow && (
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
                        {Children.map(children, (child, i) => {
                            return cloneElement(
                                <div
                                    className={cn(
                                        "keen-slider__slide",
                                        styles.slider__slide,
                                        variant === "small" && styles.slider__slide_photo
                                    )}
                                    key={i}>
                                    {child}
                                </div>
                            );
                        })}
                    </div>
                }

                {loaded && children.length > itemsToShow && (
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
