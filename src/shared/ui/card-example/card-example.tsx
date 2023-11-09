import { FC } from "react";
import styles from "./card-example.module.scss";
import { PriceItem } from "../price-item/price-item";

export type CardExampleProps = {
    width?: string | undefined;
    height?: string | undefined;
    src: string;
    alt: string;
    object: string;
    price: string;
    id: number;
};

export const CardExample: FC<CardExampleProps> = ({ width = "100%", height = "100%", src, alt, object, price }) => {
    return (
        <div className={styles.inner}>
            <img
                style={{
                    backgroundColor: "#F5F3F1",
                    objectFit: "cover",
                    width: width,
                    height: height,
                }}
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
