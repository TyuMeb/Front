import styles from "./button.module.scss";

type TButtonProps = {
    children: string;
    onClick: () => void;
    disabled?: boolean;
};

export const Button = ({ children, onClick, disabled = false }: TButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
