import styles from "./numberItem.module.scss";

type NumberItemProps = {
    caption: string;
};

const NumberItem = ({ caption }: NumberItemProps) => {
    return <span className={styles.numberItem}>{caption.slice(0, 3)}</span>;
};

export { NumberItem };
