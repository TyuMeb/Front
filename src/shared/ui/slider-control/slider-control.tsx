import { HTMLAttributes, type DetailedHTMLProps } from "react";
import styles from "./slider-control.module.scss";
import { Button } from "../button";
import { Icon } from "@src/components/icon";
import { cn } from "@src/shared/lib/cn";

export type SliderControlT = {
    onRightArrowClick: () => void;
    onLeftArrowClick: () => void;
    disabled?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SliderControl = ({ disabled, onRightArrowClick, onLeftArrowClick, ...props }: SliderControlT) => {
    return (
        <>
            <input className={styles.sliderControlHide} />
            <div className={cn(styles.sliderControl, disabled ? styles.sliderControl_disabled : null)} {...props}>
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<Icon glyph="arrowRight" transform="rotate(180)" />}
                    variant={"slider"}
                    onClick={onLeftArrowClick}
                />
                <Button
                    disabled={disabled}
                    type="button"
                    icon={<Icon glyph="arrowRight" />}
                    variant={"slider"}
                    onClick={onRightArrowClick}
                />
            </div>
        </>
    );
};

export { SliderControl };
