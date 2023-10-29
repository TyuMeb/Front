import styles from "./button.module.scss";

interface IButtonProps {
    children: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button = ({ children, onClick, disabled = false, className }: IButtonProps) => {
    return (
        <button className={`${styles.btn} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
