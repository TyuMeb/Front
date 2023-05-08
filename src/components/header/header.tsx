"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const currentRoute = usePathname();

    const activeLink = (pathname: string): string => {
        if (currentRoute === pathname) {
            return `${styles.link} ${styles.active}`;
        } else {
            return styles.link;
        }
    };

    return (
        <header className={styles.header}>
            <Link href={"/"} className={activeLink("/")}>
                Home
            </Link>
            <Link href={"page1"} className={activeLink("/page1")}>
                Page 1
            </Link>
            <Link href={"page2"} className={activeLink("/page2")}>
                Page 2
            </Link>
            <Link href={"page3"} className={activeLink("/page3")}>
                Page 3
            </Link>
        </header>
    );
};

export default Header;
