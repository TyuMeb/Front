import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";
import Icon from "@src/components/icon";

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
    isDisabled?: boolean;
    icon?: React.ReactNode;
    viewType?: "cancel" | "exit" | undefined;
    type?: "submit" | "reset" | "button";
}

const Button = ({ children, onClick, isDisabled, icon, viewType, type, ...props }: IButtonProps) => {
    return (
        <button className={`${styles.btn} ${styles[`btn_${viewType}`]} `} disabled={isDisabled} {...props}>
            {icon}
            {/*     <Icon className={styles.icon} glyph="exit" /> */}
            {children}
        </button>
    );
};

export default Button;
