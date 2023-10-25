"use client";

import styles from "./examples.module.scss";
import cn from "classnames";
import { useState } from "react";
import { CardExample } from "@src/shared/ui/card-example/card-example";
import { Slider } from "@src/shared/ui/Slider/Slider";
import { SLIDER_TEST_DATA } from "@src/shared/lib/sliderTestData";

export const Examples = () => {
    return <div className={styles.inner}>{SLIDER_TEST_DATA && <Slider slides={SLIDER_TEST_DATA} />};</div>;
};
