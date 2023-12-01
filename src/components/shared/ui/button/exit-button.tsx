import styles from "./exit-button.module.scss";

type ButtonPropsT = {
    children: string;
    onClick: () => void;
    disabled?: boolean;
};

export const ExitButton = ({ children, onClick, disabled = false }: ButtonPropsT) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
