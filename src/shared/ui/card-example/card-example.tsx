import { useState, useEffect, FC } from "react";
import styles from "./card-example.module.scss";
import { PriceItem } from "../PriceItem/PriceItem";
import { cn } from "@src/shared/lib/cn";

export type CardExampleProps = {
    width?: string | undefined;
    height?: string | undefined;
    src: string;
    alt: string;
    object: string;
    price: string;
};

export const CardExample: FC<CardExampleProps> = ({ width = "100%", height = "100%", src, alt, object, price }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            setTimeout(() => setIsVisible(true), 100);
        }
    }, [, isVisible]);

    useEffect(() => {
        setIsVisible(false);
    }, [src, alt, object, price]);

    return (
        <div className={cn(styles.inner, isVisible ? styles.inner_visible : null)}>
            <img
                style={{
                    backgroundColor: "#F5F3F1",
                    borderRadius: "44px",
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
