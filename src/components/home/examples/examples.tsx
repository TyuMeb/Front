"use client";

import styles from "./examples.module.scss";
import { Slider } from "@src/shared/ui/slider/slider";
import { SLIDER_TEST_DATA } from "@src/shared/lib/sliderTestData";

export const Examples = () => {
    return <div className={styles.inner}>{SLIDER_TEST_DATA && <Slider slides={SLIDER_TEST_DATA} />}</div>;
};
