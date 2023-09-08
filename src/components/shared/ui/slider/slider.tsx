import { HTMLAttributes, type DetailedHTMLProps, useState } from "react";
import styles from "./slider.module.scss";
import Image from "next/image";
import Button from "../button/button";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";

interface ISliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClick: () => void;
    disabled?: boolean;
    extraClass?: string;
}

const Slider = ({ onClick, extraClass, ...props }: ISliderProps) => {
    const [disabled, setDisabled] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

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

    const className = `${styles.slider}  ${styles[`slider_${disabled}`]} ${extraClass} `;

    return (
        <div className={className} {...props}>
            <Button type="button" icon={<ArrowLeftIcon />} extraClass={styles.selectIcon} onClick={backwardSlide} />
            <Button type="button" icon={<ArrowRightIcon />} extraClass={styles.selectIcon} onClick={forwardSlide} />

            {/*       <button className={styles.button} >
        <Image src="/home/arrow-left.svg" alt="arrow-left" width={14} height={32} />
      </button>
      <button className={styles.button} >
        <Image src="/home/arrow-right.svg" alt="arrow-right" width={14} height={32} />
      </button> */}
        </div>
    );
};

export default Slider;
