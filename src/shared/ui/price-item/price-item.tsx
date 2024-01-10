import { priceFormat } from "@src/shared/lib/formatters/price";
import styles from "./price-item.module.scss";

type PriceItemProps = {
    caption: string;
};

export const PriceItem = ({ caption }: PriceItemProps) => {
    return (
        <span className={styles.priceItem}>
            {Number.isInteger(Number(caption)) ? `${priceFormat(caption)} р` : caption}
        </span>
    );
};
