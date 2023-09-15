import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import { WarningIcon } from "../icons/warning-icon";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isError?: boolean;
    error?: boolean;
    errorMessage?: string;
    id?: string;
}

export const Input = (props: IInputProps) => {
    const { value, error, errorMessage, label, onChange } = props;

    return (
        <div className={styles.inputContainer}>
            {label && (
                <label className={!error ? styles.label : `${styles.label} ${styles.label_error}`} htmlFor={props.id}>
                    {error && <WarningIcon />}
                    {label}
                </label>
            )}
            <input
                className={styles.input}
                inputMode={props.inputMode}
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                maxLength={props.maxLength}
                minLength={props.minLength}
                required={props.required}
                onClick={props.onClick}
                name={props.name}
                id={props.id}
                onChange={onChange}
                value={value}
            />
            {error && <span className={styles.error}>{errorMessage}</span>}
        </div>
    );
};
