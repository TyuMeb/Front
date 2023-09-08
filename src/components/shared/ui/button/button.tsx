import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: React.ReactNode;
    onClick: () => void;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    viewType?: "cancel" | "exit" | undefined;
    type?: "submit" | "reset" | "button";
    extraClass?: string;
}

const Button = ({ children, onClick, isDisabled, icon, viewType, type, extraClass = "", ...props }: IButtonProps) => {
    const className = `${styles.btn}  ${styles[`btn_${viewType}`]} ${extraClass} `;

    return (
        <button className={className} disabled={isDisabled} {...props}>
            {icon}
            {children}
        </button>
    );
};

export default Button;
