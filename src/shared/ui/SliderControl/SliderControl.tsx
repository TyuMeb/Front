import { HTMLAttributes, type DetailedHTMLProps } from "react";
import styles from "./SliderControl.module.scss";
import { Button } from "../button";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";

export type SliderControlProps = {
    onRightArrowClick: () => void;
    onLeftArrowClick: () => void;
    disabled?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SliderControl = ({ disabled, onRightArrowClick, onLeftArrowClick, ...props }: SliderControlProps) => {
    return (
        <>
            <input className={styles.sliderControlHide} />
            <div className={styles.sliderControl} {...props}>
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<ArrowLeftIcon />}
                    variant={"slider"}
                    onClick={onLeftArrowClick}
                />
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<ArrowRightIcon />}
                    variant={"slider"}
                    onClick={onRightArrowClick}
                />
            </div>
        </>
    );
};

export { SliderControl };
