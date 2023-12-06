import styles from "./number-item.module.scss";

type NumberItemProps = {
    caption: string;
};

export const NumberItem = ({ caption }: NumberItemProps) => {
    return <span className={styles.numberItem}>{caption.slice(0, 3)}</span>;
};
