"use client";

import styles from "./Slider.module.scss";
import cn from "classnames";
import { useState } from "react";
import { CardExample } from "@src/shared/ui/card-example/card-example";
import { SliderControl } from "../SliderControl";

export const Slider = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // function forwardSlide() {
    //     setCurrentSlide((current) => {
    //         if (current < 1) return current + 1;
    //         else return 0;
    //     });
    // }

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // function backwardSlide() {
    //     setCurrentSlide((current) => {
    //         if (current > 0) return current - 1;
    //         else return 1;
    //     });
    // }

    return (
        <div className={styles.inner}>
            <h2 className={cn("title-h2", styles.title)}>Примеры работ</h2>
            <ul className={styles.examples}>
                <li className={styles.examples_small1}>
                    <CardExample src="/home/slide00.jpg" alt="logo-nightstand1" object="Полка" price="1000 р" />
                </li>
                <li className={styles.examples_small2}>
                    <CardExample src="/home/slide01.jpg" alt="logo-nightstand2" object="Полка" price="1000 р" />
                </li>
                <li className={styles.examples_right}>
                    <CardExample src="/home/slide02.jpg" alt="logo-nightstand4" object="Полка" price="1400 р" />
                    <SliderControl />
                </li>
                <li className={styles.examples_big}>
                    <CardExample src="/home/slide03.jpg" alt="logo-nightstand4" object="Полка" price="1400 р" />
                </li>
            </ul>
        </div>
    );
};

//                 <div className={styles.leftSide}>
//                     <div className={styles.top}>
//                         <CardExample
//                             width={388}
//                             height={208}
//                             src={`/home/s_slide${currentSlide}0.jpg`}
//                             alt="logo-nightstand"
//                             object="Полка"
//                             price="1000 р"
//                         />
//                         <CardExample
//                             width={388}
//                             height={208}
//                             src={`/home/s_slide${currentSlide}1.jpg`}
//                             alt="logo-closet-sm"
//                             object="Полка"
//                             price="1000 р"
//                         />
//                     </div>
//                     <CardExample
//                         width={804}
//                         height={326}
//                         src={`/home/s_slide${currentSlide}2.jpg`}
//                         alt="logo-kitchen"
//                         object="Полка"
//                         price="1000 р"
//                     />
//                 </div>
//                 <div className={styles.rightSide}>
//                     <CardExample
//                         width={388}
//                         height={444}
//                         src={`/home/s_slide${currentSlide}3.jpg`}
//                         alt="logo-closet-lg"
//                         object="Полка"
//                         price="1000 р"
//                     />
//                     <SliderControl
//                         onClick={function (): void {
//                             throw new Error("Function not implemented.");
//                         }}
//                     />
//                     {/* <div className={styles.slider}>
//                         <button className={styles.button} onClick={backwardSlide}>
//                             <Image src="/home/arrow-left.svg" alt="arrow-left" width={14} height={32} />
//                         </button>
//                         <button className={styles.button} onClick={forwardSlide}>
//                             <Image src="/home/arrow-right.svg" alt="arrow-right" width={14} height={32} />
//                         </button>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// };
