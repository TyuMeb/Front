import React, { FC, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./slider_v2.module.scss";
import { cn } from "@src/shared/lib/cn";
import { CardExample, CardExampleProps } from "@src/shared/ui/card-example/card-example";
import { SliderControl } from "../sllderControl";

type SlideItem = {
    items: Array<CardExampleProps>;
};

type SliderProps = {
    slides: Array<SlideItem>;
    disabled?: boolean;
};

export const Slider_v2: FC<SliderProps> = ({ slides, disabled }) => {
    const [currentSlide1, setCurrentSlide1] = useState<number>(0);
    const [currentSlide2, setCurrentSlide2] = useState<number>(0);
    const [currentSlide3, setCurrentSlide3] = useState<number>(0);
    const [currentSlide4, setCurrentSlide4] = useState<number>(0);

    const [isDisabled, setIsDisabled] = useState(disabled);

    const [mOver1, setMOver1] = useState<boolean>(false);
    const [mOver2, setMOver2] = useState<boolean>(false);
    const [mOver3, setMOver3] = useState<boolean>(false);
    const [mOver4, setMOver4] = useState<boolean>(false);

    const [loaded1, setLoaded1] = useState<boolean>(false);
    const [loaded2, setLoaded2] = useState<boolean>(false);
    const [loaded3, setLoaded3] = useState<boolean>(false);
    const [loaded4, setLoaded4] = useState<boolean>(false);

    useEffect(() => {
        setIsDisabled(disabled);
    }, [disabled]);

    useEffect(() => {
        let timer: number;
        if (!isDisabled) {
            timer = window.setTimeout(() => {
                !mOver1 && instanceRef1.current?.next();
                !mOver2 && instanceRef2.current?.next();
                !mOver3 && instanceRef3.current?.next();
                !mOver4 && instanceRef4.current?.next();
            }, 4000);
            return () => {
                window.clearTimeout(timer);
            };
        }
    });

    function slideForward() {
        if (slides && !isDisabled) {
            instanceRef1.current?.next();
            instanceRef2.current?.next();
            instanceRef3.current?.next();
            instanceRef4.current?.next();
        }
    }

    function slideBackward() {
        if (slides && !isDisabled) {
            instanceRef1.current?.prev();
            instanceRef2.current?.prev();
            instanceRef3.current?.prev();
            instanceRef4.current?.prev();
        }
    }

    const [sliderRef1, instanceRef1] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !isDisabled,
            slideChanged(slider) {
                setCurrentSlide1(slider.track.details.rel);
            },
            created() {
                setLoaded1(true);
            },
        },
        [
            (slider) => {
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        setMOver1(true);
                    });
                    slider.container.addEventListener("mouseout", () => {
                        setMOver1(false);
                    });
                });
            },
        ]
    );

    const [sliderRef2, instanceRef2] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !isDisabled,
            slideChanged(slider) {
                setCurrentSlide2(slider.track.details.rel);
            },
            created(s) {
                setLoaded2(true);
            },
        },
        [
            (slider) => {
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        setMOver2(true);
                    });
                    slider.container.addEventListener("mouseout", () => {
                        setMOver2(false);
                    });
                });
            },
        ]
    );

    const [sliderRef3, instanceRef3] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !isDisabled,
            slideChanged(slider) {
                setCurrentSlide3(slider.track.details.rel);
            },
            created() {
                setLoaded3(true);
            },
        },
        [
            (slider) => {
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        setMOver3(true);
                    });
                    slider.container.addEventListener("mouseout", () => {
                        setMOver3(false);
                    });
                });
            },
        ]
    );

    const [sliderRef4, instanceRef4] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !isDisabled,
            slideChanged(slider) {
                setCurrentSlide4(slider.track.details.rel);
            },
            created() {
                setLoaded4(true);
            },
        },
        [
            (slider) => {
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        setMOver4(true);
                    });
                    slider.container.addEventListener("mouseout", () => {
                        setMOver4(false);
                    });
                });
            },
        ]
    );

    return (
        <main className={styles.slider}>
            <div className={styles.slider__content}>
                <div className={styles.slider__slideContainer}>
                    <div ref={sliderRef1} className={cn("keen-slider", styles.slider__rightSlide)}>
                        {slides[0].items &&
                            slides[0].items.map((item, i) => (
                                <div className="keen-slider__slide" key={i}>
                                    <CardExample
                                        src={item.src}
                                        alt={item.alt}
                                        object={item.object}
                                        price={item.price}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className={styles.slider__controls}>
                        {loaded1 &&
                            loaded2 &&
                            loaded3 &&
                            loaded4 &&
                            instanceRef1.current &&
                            instanceRef2.current &&
                            instanceRef3.current &&
                            instanceRef4.current && (
                                <SliderControl
                                    onRightArrowClick={slideForward}
                                    onLeftArrowClick={slideBackward}
                                    disabled={disabled}
                                />
                            )}
                    </div>
                </div>
                <div ref={sliderRef2} className={cn("keen-slider", styles.slider__slideContainer)}>
                    {slides[1].items &&
                        slides[1].items.map((item, i) => (
                            <div className="keen-slider__slide" key={i}>
                                <CardExample src={item.src} alt={item.alt} object={item.object} price={item.price} />
                            </div>
                        ))}
                </div>
                <div ref={sliderRef3} className={cn("keen-slider", styles.slider__slideContainer)}>
                    {slides[2].items &&
                        slides[2].items.map((item, i) => (
                            <div className="keen-slider__slide" key={i}>
                                <CardExample src={item.src} alt={item.alt} object={item.object} price={item.price} />
                            </div>
                        ))}
                </div>
                <div ref={sliderRef4} className={cn("keen-slider", styles.slider__slideContainer)}>
                    {slides[3].items &&
                        slides[3].items.map((item, i) => (
                            <div className="keen-slider__slide" key={i}>
                                <CardExample src={item.src} alt={item.alt} object={item.object} price={item.price} />
                            </div>
                        ))}
                </div>
            </div>
        </main>
    );
};
