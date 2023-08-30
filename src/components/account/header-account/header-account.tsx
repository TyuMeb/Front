"use client";

import styles from "./header-account.module.scss";

const HeaderAccount = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headeraccount}>
                        <div className={styles.logo}>
                            <a className={styles.logolink} href="">
                                ВайВи
                            </a>
                        </div>
                        <nav className={styles.nav}>
                            <ul className={styles.menu}>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        Мои заказы
                                    </a>
                                </li>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        Полка настенная
                                    </a>
                                </li>
                                <li className={styles.menuitem}>
                                    <a className={styles.menulink} href="">
                                        чат с исполнителем 1
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.avatar}>avatar</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HeaderAccount;
