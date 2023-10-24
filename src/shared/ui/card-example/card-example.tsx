import Image from "next/image";
import styles from "./card-example.module.scss";
import { PriceItem } from "../PriceItem/PriceItem";

type CardExampleProps = {
    width?: string | undefined;
    height?: string | undefined;
    src: string;
    alt: string;
    object: string;
    price: string;
};

export const CardExample = ({ width, height, src, alt, object, price }: CardExampleProps) => {
    return (
        <div className={styles.inner}>
            <Image
                style={{ borderRadius: "44px", objectFit: "cover", width: width, height: height }}
                width={0}
                height={0}
                src={src}
                alt={alt}
            />
            <div className={styles.description}>
                {object && <PriceItem caption={object} />}
                {price && <PriceItem caption={price} />}
            </div>
        </div>
    );
};

CardExample.defaultProps = {
    width: "100%",
    height: "100%",
};
