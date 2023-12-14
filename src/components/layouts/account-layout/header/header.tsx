"use client";

import React, { HTMLAttributes } from "react";

import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import avatar from "@public/account/photo.png";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;

export const Header = ({ className, children, ...props }: HeaderProps) => {
    return (
        <header className={className} {...props}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <Link className={`subtitle1 ${styles.logo}`} href="/">
                        ВайВи
                    </Link>

                    {children}

                    <Link className={styles.avatar} href="#">
                        <Image priority={true} src={avatar} alt="Фото"></Image>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
