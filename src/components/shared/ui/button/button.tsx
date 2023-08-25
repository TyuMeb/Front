import styles from "./button.module.scss";

interface IButtonProps {
    label: string;
    disabled?: boolean;

    /**
     * Is this the principal call to action on the page?
     */
    //    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    borderColor?: string;
    /**
     * How large should the button be?
     */
    // size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    // label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export const Button = ({ label, backgroundColor, borderColor, onClick, disabled = false }: IButtonProps) => {
    const buttonStyle = {
        backgroundColor,
        border: "2px solid",
        borderColor,
    };

    return (
        <button style={buttonStyle} className={styles.btn} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};
