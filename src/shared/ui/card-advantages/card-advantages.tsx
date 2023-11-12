import { Icon } from "@src/components/icon";
import styles from "./card-advantages.module.scss";

type CardAdvantagesProps = {
    bgColor: string;
    title: string;
    paragraph: string;
    glyphIcon: "clock" | "settings" | "dollar" | "person";
};

export const CardAdvantages = ({ bgColor, title, paragraph, glyphIcon }: CardAdvantagesProps) => {
    return (
        <div className={`${styles.card} ${styles[bgColor]}`}>
            <div className={styles.inner}>
                <div className={styles.text}>
                    <h4 className={styles.title}>{title}</h4>
                    <p>{paragraph}</p>
                </div>
                <Icon className={styles.img} glyph={glyphIcon} />
            </div>
        </div>
    );
};
