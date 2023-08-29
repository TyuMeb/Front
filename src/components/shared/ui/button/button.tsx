import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    viewType?: "cancel" | "exit";
    type?: "submit" | "reset" | "button";
}

const Button = ({ children, onClick, isDisabled, icon, viewType, type, ...props }: IButtonProps) => {
    return (
        <button className={`${styles.btn} ${styles[`btn_${viewType}`]} `} disabled={isDisabled} {...props}>
            {icon}
            {children}
        </button>
    );
};

export default Button;
