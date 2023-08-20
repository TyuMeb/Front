import styles from "./exit-button.module.scss";

interface IButtonProps {
    children: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ExitButton = ({ children, onClick, disabled = false }: IButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
