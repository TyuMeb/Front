"use client";

import React, { HTMLAttributes } from "react";

import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import avatar from "@public/account/photo.png";
import { Breadcrumbs } from "./breadcrumbs";

type HeaderT = {} & HTMLAttributes<HTMLDivElement>;

export const Header = ({ className, ...props }: HeaderT) => {
    return (
        <header className={className} {...props}>
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <Link className={`subtitle1 ${styles.logo}`} href="/">
                        ВайВи
                    </Link>
                    <Breadcrumbs />
                    <Link className={styles.avatar} href="#">
                        <Image priority={true} src={avatar} alt="Фото"></Image>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
