import Image from "next/image";
import styles from "./card-example.module.scss";

type CardExampleProps = {
    width: number;
    height: number;
    src: string;
    alt: string;
    object: string;
    price: string;
};

export const CardExample = ({ width, height, src, alt, object, price }: CardExampleProps) => {
    return (
        <div className={styles.inner}>
            <Image className={styles.image} width={width} height={height} src={src} alt={alt} />
            <div className={styles.description}>
                <div className={styles.object}>{object}</div>
                <div className={styles.price}>{price}</div>
            </div>
        </div>
    );
};
