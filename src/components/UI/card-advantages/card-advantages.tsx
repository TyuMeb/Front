import styles from "./card-advantages.module.scss";
import Image from "next/image";

type TCardAdvantagesProps = {
    bgColor: string;
    title: string;
    paragraph: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

export const CardAdvantages = ({ bgColor, title, paragraph, src, alt, width, height }: TCardAdvantagesProps) => {
    const backgroundColor: React.CSSProperties = {
        backgroundColor: bgColor,
    };

    return (
        <div className={styles.card} style={backgroundColor}>
            <div className={styles.inner}>
                <div className={styles.text}>
                    <h4 className={styles.title}>{title}</h4>
                    <p>{paragraph}</p>
                </div>
                <Image className={styles.img} src={src} alt={alt} width={width} height={height} />
            </div>
        </div>
    );
};

