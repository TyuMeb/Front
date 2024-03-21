import { type DetailedHTMLProps } from "react";
import classNames from "classnames/bind";
import styles from "./button.module.scss";

const cx = classNames.bind(styles);

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
      className={cx(
        "btn",
        styles[`btn_${variant}`],
        { "text-small": variant === "exit" },
        { "text-medium": variant !== "exit" },
        props.className
      )}
    >
      {isLoading && <span className={styles.spinner}></span>}
      {icon}
      {children}
    </button>
  );
};

export { Button };
