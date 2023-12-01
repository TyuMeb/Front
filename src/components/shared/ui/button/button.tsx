import styles from "./button.module.scss";

type ButtonPropsT = {
    children: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
};

export const Button = ({ children, onClick, disabled = false, className }: ButtonPropsT) => {
    return (
        <button className={`${styles.btn} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
