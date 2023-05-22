import styles from "./step.module.scss";
import clsx from "clsx";
import { StaticImageData } from "next/image";

type TStepProps = {
    children: string;
    title: string;
    num: number;
    imgSrc: StaticImageData;
};

export const Step = ({ children, title, num, imgSrc }: TStepProps) => {
    return (
        <div>
            <div
                className={styles.img}
                style={{
                    background: `url(${imgSrc.src}) bottom no-repeat`,
                }}>
                <div className={styles.num}>{num}</div>
            </div>
            <div className={styles.text}>
                <h4 className="h4">{title}</h4>
                <p className={styles.p}>{children}</p>
            </div>
        </div>
    );
};
