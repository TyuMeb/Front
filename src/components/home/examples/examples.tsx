"use client";

import styles from "./examples.module.scss";
import { SLIDER_TEST_DATA } from "@src/shared/lib/sliderTestData_v2";
import { SliderExample } from "@src/shared/ui/slider-example/slider-example";

export const Examples = () => {
    return <div className={styles.inner}>{SLIDER_TEST_DATA && <SliderExample slides={SLIDER_TEST_DATA} />}</div>;
};
