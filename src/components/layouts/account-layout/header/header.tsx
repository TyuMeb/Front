"use client";

import React, { HTMLAttributes } from "react";

import styles from "./header.module.scss";
import Link from "next/link";
import { HeaderAvatar } from "@src/domains/user/ui/header-avatar";

type HeaderProps = {} & HTMLAttributes<HTMLDivElement>;

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={className} {...props}>
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <Link className={`subtitle1 ${styles.logo}`} href="/">
            ВайВи
          </Link>
          <HeaderAvatar className="ml-auto" />
        </nav>
      </div>
    </header>
  );
};
