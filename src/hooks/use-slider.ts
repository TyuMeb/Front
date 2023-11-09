import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

type Props = { disabled?: boolean; rtl?: boolean };

export const useSlider = (options: Props) => {
    const [, setCurrentSlide] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !options.disabled,
            rtl: options.rtl,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        },
        [
            (slider) => {
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        setIsOver(true);
                    });
                    slider.container.addEventListener("mouseout", () => {
                        setIsOver(false);
                    });
                });
            },
        ]
    );

    return { sliderRef, instanceRef, isOver, loaded };
};
