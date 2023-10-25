import Image from "next/image";
import styles from "./card-example.module.scss";
import { PriceItem } from "../PriceItem/PriceItem";

export type CardExampleProps = {
    width?: string | undefined;
    height?: string | undefined;
    src: string;
    alt: string;
    object: string;
    price: string;
};

export const CardExample = ({ width = "100%", height = "100%", src, alt, object, price }: CardExampleProps) => {
    return (
        <div className={styles.inner}>
            <Image
                style={{
                    backgroundColor: "#F5F3F1",
                    borderRadius: "44px",
                    objectFit: "cover",
                    width: width,
                    height: height,
                }}
                fill={true}
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
