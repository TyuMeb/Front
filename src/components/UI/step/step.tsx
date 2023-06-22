import styles from "./step.module.scss";
import { StaticImageData } from "next/image";

interface IStepProps {
    title: string;
    num: number;
    imgSrc: StaticImageData;
    children: string;
}

export const Step = ({ children, title, num, imgSrc }: IStepProps) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.img}
                style={{
                    background: `url(${imgSrc.src}) bottom no-repeat`,
                }}>
                <div className={styles.num}>{num}</div>
            </div>
            <div className={styles.text}>
                <h4 className="title-h4">{title}</h4>
                <p className={styles.p}>{children}</p>
            </div>
        </div>
    );
};

