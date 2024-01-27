import { type DetailedHTMLProps } from "react";
import styles from "./button.module.scss";
import { cn } from "@src/shared/lib/cn";

type ButtonProps = {
  icon?: React.ReactNode;
  variant?: "cancel" | "exit" | "slider" | undefined;
  isLoading?: boolean;
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, icon, variant, isLoading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={cn(styles.btn, styles[`btn_${variant}`], props.className)}
    >
      {isLoading && <span className={styles.spinner}></span>}
      {icon}
      {children}
    </button>
  );
};

export { Button };
