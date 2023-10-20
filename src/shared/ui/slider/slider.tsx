import { HTMLAttributes, type DetailedHTMLProps, useState } from "react";
import styles from "./slider.module.scss";
import { Button } from "../button";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";

export type SliderProps = {
    disabled?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Slider = ({ disabled, ...props }: SliderProps) => {
    const [, setCurrentSlide] = useState(0);

    function backwardSlide() {
        setCurrentSlide((current) => {
            if (current > 0) return current - 1;
            else return 1;
        });
    }

    function forwardSlide() {
        setCurrentSlide((current) => {
            if (current < 1) return current + 1;
            else return 0;
        });
    }

    return (
        <>
            <input className={styles.sliderHide} />
            <div className={styles.slider} {...props}>
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<ArrowLeftIcon />}
                    variant={"slider"}
                    onClick={backwardSlide}
                />
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<ArrowRightIcon />}
                    variant={"slider"}
                    onClick={forwardSlide}
                />
            </div>
        </>
    );
};

export { Slider };
