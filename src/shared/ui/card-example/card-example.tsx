import { FC } from "react";
import styles from "./card-example.module.scss";
import { PriceItem } from "../price-item/price-item";

export type CardExampleProps = {
    id?: number;
    alt?: string;
    width?: string | undefined;
    height?: string | undefined;
    src: string;
    name: string;
    price: string;
};

export const CardExample: FC<CardExampleProps> = ({ width = "100%", height = "100%", src, alt, name, price }) => {
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
                {name && <PriceItem caption={name} />}
                {price && <PriceItem caption={price} />}
            </div>
        </div>
    );
};
