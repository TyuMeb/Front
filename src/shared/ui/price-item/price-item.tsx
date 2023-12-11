import styles from "./price-item.module.scss";

type PriceItemProps = {
    caption: string;
};

export const PriceItem = ({ caption }: PriceItemProps) => {
    return <span className={styles.priceItem}>{caption}</span>;
};
