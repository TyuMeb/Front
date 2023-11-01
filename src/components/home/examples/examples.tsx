"use client";

import styles from "./examples.module.scss";
import { Slider } from "@src/shared/ui/slider/slider";
import { SLIDER_TEST_DATA } from "@src/shared/lib/sliderTestData_v2";
import { SliderNew } from "@src/shared/ui/slider-new/slider-new";

export const Examples = () => {
    return <div className={styles.inner}>{SLIDER_TEST_DATA && <SliderNew slides={SLIDER_TEST_DATA} />}</div>;
};
