"use client";

import styles from "./examples.module.scss";
import cn from "classnames";
import { SlideItemT, SliderExample } from "@src/shared/ui/slider-example";
import { useGalleryQuery } from "@src/redux/api/content-api-slice.1";

export const Examples = () => {
    const { data = [] } = useGalleryQuery();

    const slides = data.reduce((acc, slide) => {
        const index = Number(slide.slider_number) - 1;
        if (acc[index]) {
            acc[index].items.push({ src: slide.image_url!, name: slide.name!, price: slide.price!, alt: slide.name! });
        } else {
            acc[index] = {
                items: [],
            };
        }

        return acc;
    }, [] as SlideItemT[]);

    return slides.length ? (
        <div id="examples" className={styles.inner} key={slides.length}>
            <h2 className={cn("title-h2", styles.title)}>Примеры работ</h2>
            <SliderExample slides={slides} />
        </div>
    ) : (
        <></>
    );
};
