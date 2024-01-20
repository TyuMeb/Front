import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { Button } from "../button";
import styles from "./slider-user.module.scss";
import { cn } from "@src/shared/lib/cn";
import { useSlider } from "@src/hooks/use-slider";
import { Icon } from "@src/components/icon";

type UserSliderProps = {
  itemsToShow?: number;
  spacing?: number;
} & HTMLAttributes<HTMLDivElement>;

export const SliderUser: FC<UserSliderProps> = ({ itemsToShow = 1, children, className, spacing = 18, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { sliderRef, instanceRef, loaded } = useSlider({
    perView: itemsToShow,
    spacing,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function slideForward() {
    instanceRef.current?.next();
  }

  function slideBackward() {
    instanceRef.current?.prev();
  }

  return (
    <section className={cn(styles.slider, isVisible ? styles.slider_visible : null, className)} {...props}>
      {loaded && instanceRef.current && (
        <Button
          type="button"
          icon={<Icon glyph="arrowRight" width={7} height={15} viewBox="0 0 16 30" transform="rotate(-180)" />}
          variant="slider"
          onClick={slideBackward}
          className={styles.slider__btn}
        />
      )}

      <div ref={sliderRef} className={cn("keen-slider")}>
        {children}
      </div>

      {loaded && instanceRef.current && (
        <Button
          type="button"
          icon={<Icon glyph="arrowRight" width={7} height={15} viewBox="0 0 16 30" />}
          variant="slider"
          onClick={slideForward}
          className={styles.slider__btn}
        />
      )}
    </section>
  );
};
