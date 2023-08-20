"use client";

import styles from "./header-mini.module.scss";

const HeaderMini = () => {
    return (
        <header className={styles.headermini}>
            <ul className={styles.menu}>
                <li className={styles.logo}>ВайВи</li>
                <li className={styles.link}>avatar</li>
            </ul>
        </header>
    );
};

export default HeaderMini;
