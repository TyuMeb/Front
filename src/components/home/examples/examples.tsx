"use client";

import styles from "./examples.module.scss";
import { Slider } from "@src/shared/ui/slider/slider";
import { SLIDER_TEST_DATA } from "@src/shared/lib/sliderTestData_v2";
import { Slider_v2 } from "@src/shared/ui/slider_v2/slider_v2";

export const Examples = () => {
    return <div className={styles.inner}>{SLIDER_TEST_DATA && <Slider_v2 slides={SLIDER_TEST_DATA} />}</div>;
};
