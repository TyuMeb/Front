import styles from "./input.module.scss";

interface IInputProps {
    type?: string;
    placeholder?: string;
    maxLength?: number;
    required?: boolean;
    errorMessage?: string;
}

export const Input = ({ type = "text", placeholder, maxLength, required = false, errorMessage }: IInputProps) => {
    return (
        <div>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                required={required}
            />
            {errorMessage && <p className={styles.message}>{errorMessage}</p>}
        </div>
    );
};

