import styles from "./exit-button.module.scss";
import icon from "../../../../../public/icons/logout.svg";
import iconDisabled from "../../../../../public/icons/logout_disabled.svg";
import Image from "next/dist/client/image";

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
    backgroundColor: string;
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

export const ExitButton = ({ label, backgroundColor, onClick, disabled = false }: IButtonProps) => {
    const buttonStyle = {
        backgroundColor,
        color: disabled ? "#B5B3B2" : "inherit",
    };

    return (
        <button style={buttonStyle} className={styles.btn} onClick={onClick} disabled={disabled}>
            <div className={styles.container}>
                <Image src={disabled ? iconDisabled : icon} alt="logout" />
                {label}
            </div>
        </button>
    );
};
