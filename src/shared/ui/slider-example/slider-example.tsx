import React, { FC, useEffect } from "react";
import { useSlider } from "@src/hooks/use-slider";
import styles from "./slider-example.module.scss";
import { cn } from "@src/shared/lib/cn";
import { CardExample, CardExampleProps } from "@src/shared/ui/card-example";
import { SliderControl } from "@src/shared/ui/slider-control";

export type SlideItemProps = {
  items: Required<Array<CardExampleProps>>;
};

type SliderProps = {
  slides: Required<Array<SlideItemProps>>;
  disabled?: boolean;
  delay?: number;
  slideRight?: boolean;
  auto?: boolean;
};

export const SliderExample: FC<SliderProps> = ({
  slides,
  disabled = false,
  delay = 4,
  slideRight = false,
  auto = true,
}) => {
  const slider1 = useSlider({ disabled: disabled, rtl: slideRight });
  const slider2 = useSlider({ disabled: disabled, rtl: slideRight });
  const slider3 = useSlider({ disabled: disabled, rtl: slideRight });
  const slider4 = useSlider({ disabled: disabled, rtl: slideRight });

  const sliders = [slider1, slider2, slider3, slider4];

  useEffect(() => {
    let timer: number;
    if (!disabled && auto) {
      timer = window.setTimeout(() => {
        sliders.forEach((slider) => !slider.isOver && slider.instanceRef.current?.next());
      }, delay * 2000);
      return () => {
        window.clearTimeout(timer);
      };
    }
  });

  function slideForward() {
    if (!disabled) {
      sliders.forEach((slider) => slider.instanceRef.current?.next());
    }
  }

  function slideBackward() {
    if (!disabled) {
      sliders.forEach((slider) => slider.instanceRef.current?.prev());
    }
  }

  return slides.length ? (
    <main className={cn(styles.slider, styles.slider_visible)}>
      <div className={styles.slider__content}>
        {sliders.map((slideItem, index) => (
          <div ref={slideItem.sliderRef} className={cn("keen-slider", styles.slider__slideContainer)} key={index}>
            {slides?.[index]?.items &&
              slides?.[index]?.items.map((item) => (
                <div className="keen-slider__slide" key={item.name}>
                  <CardExample src={item.src} alt={item.alt} name={item.name} price={item.price} />
                </div>
              ))}
          </div>
        ))}
        <div className={styles.slider__controlsContainer}>
          {sliders.reduce((res, slider) => res && slider.loaded && !!slider.instanceRef.current, true) && (
            <SliderControl onRightArrowClick={slideForward} onLeftArrowClick={slideBackward} disabled={disabled} />
          )}
        </div>
      </div>
    </main>
  ) : (
    <></>
  );
};
