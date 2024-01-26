import Image, { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";
import { SliderUser } from "@src/shared/ui/slider-user";
import styles from "./slider.module.scss";

type SliderProps = {
    images: StaticImageData[];
    alt: string;
} & HTMLAttributes<HTMLDivElement>;

export const Slider = ({ images, alt, className, ...props }: SliderProps) => {
    return (
        <SliderUser className={`${styles.slider} ${className}`} {...props}>
            {images.map((image, i) => {
                return (
                    <div key={i} className="keen-slider__slide">
                        <div className={styles.wrapperImages}>
                            <Image src={image} alt={alt} className={styles.sliderImage} />
                        </div>
                    </div>
                );
            })}
        </SliderUser>
    );
};
