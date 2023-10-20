import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";
import { cn } from "@src/shared/lib/cn";

interface IButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.ReactNode;
    variant?: "cancel" | "exit" | "slider" | undefined;
}

const Button = ({ children, icon, variant, ...props }: IButtonProps) => {
    return (
        <button {...props} className={cn(styles.btn, styles[`btn_${variant}`], props.className)}>
            {icon}
            {children}
        </button>
    );
};

export { Button };
