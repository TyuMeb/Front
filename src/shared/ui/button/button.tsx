import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";
import { cn } from "@src/shared/lib/cn";

type ButtonProps = {
    icon?: React.ReactNode;
    variant?: "cancel" | "exit" | "slider" | undefined;
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, icon, variant, ...props }: ButtonProps) => {
    return (
        <button {...props} className={cn(styles.btn, styles[`btn_${variant}`], props.className)}>
            {icon}
            {children}
        </button>
    );
};

export { Button };
