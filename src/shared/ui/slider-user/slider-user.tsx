import React, { FC, useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Button } from "../button";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import styles from "./slider-user.module.scss";
import { cn } from "@src/shared/lib/cn";

type SlideItem = {
    src: string;
    alt: string;
};

type UserSliderProps = {
    slides: Array<SlideItem>;
    itemsToShow: number;
    photoSlider: boolean;
};

export const SliderUser: FC<UserSliderProps> = ({ slides, itemsToShow, photoSlider = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [, setCurrentSlide] = useState(0);
    const [, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        initial: 1,
        drag: false,
        slides: {
            perView: itemsToShow,
            spacing: photoSlider ? 20 : 8,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
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
        <main className={cn(styles.slider, isVisible ? styles.slider_visible : null)}>
            <div className={cn(styles.slider__content, photoSlider && styles.slider__content_photo)}>
                {!photoSlider && slides.length > itemsToShow && (
                    <span className={styles.slider__arrow_wrapper}>
                        <Button
                            type="button"
                            icon={<ArrowLeftIcon />}
                            variant={"slider"}
                            onClick={slideBackward}
                            className={styles.slider__btn}
                        />
                    </span>
                )}

                {
                    <div ref={sliderRef} className={cn("keen-slider", !photoSlider && styles.slider__slider_wrapper)}>
                        {slides.map((item, i) => (
                            <div
                                className={cn(
                                    "keen-slider__slide",
                                    styles.slider__slide,
                                    photoSlider && styles.slider__slide_photo
                                )}
                                key={i}>
                                <img className={styles.slider__image} src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                }

                {slides.length > itemsToShow && (
                    <span className={styles.slider__arrow_wrapper}>
                        <Button
                            type="button"
                            icon={<ArrowRightIcon />}
                            variant={"slider"}
                            onClick={slideForward}
                            className={styles.slider__btn}
                        />
                    </span>
                )}
            </div>
        </main>
    );
};
