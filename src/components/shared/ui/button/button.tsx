import styles from "./button.module.scss";

interface IButtonProps {
    children: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ({ children, onClick, disabled = false }: IButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
