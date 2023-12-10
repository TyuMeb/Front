import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

type UseSlider = { disabled?: boolean; rtl?: boolean; perView?: number; spacing?: number };

export const useSlider = (options: UseSlider) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isOver, setIsOver] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            drag: !options.disabled,
            rtl: options.rtl,
            slides: {
                perView: options.perView ? options.perView : 1,
                spacing: options.spacing ? options.spacing : 0,
            },
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

    return { sliderRef, instanceRef, isOver, loaded, currentSlide };
};
