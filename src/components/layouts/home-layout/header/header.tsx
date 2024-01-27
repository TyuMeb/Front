"use client";

import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { openModal } from "@src/redux/slices/modal-slice";
import { cn } from "@src/shared/lib/cn";
import Link from "next/link";
import { useUser } from "@src/redux/slices/users-slice";
import { HeaderAvatar } from "@src/domains/user/ui/header-avatar";
import { Icon } from "@src/components/icon";

export const Header = () => {
  const dispatch = useAppDispatch();

  const user = useUser();

  const [current, setCurrent] = useState<string | undefined>(undefined);
  const { contentBlock } = useAppSelector((store) => store.header);

  useEffect(() => {
    setCurrent(contentBlock);
  }, [contentBlock]);

  const switchTab = (tab: string) => {
    setCurrent(tab);
    const element: HTMLElement | null = document.getElementById(tab);
    if (element) {
      element.id === "form"
        ? element.scrollIntoView({ behavior: "smooth", block: "center" })
        : element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={cn(styles.nav, "container")}>
        <ul className={cn(styles.list, "whitespace-nowrap overflow-auto hide-scrollbar")}>
          <li className={styles.logo}>
            <Link href="/#home">ВайВи</Link>
          </li>
          <li className={current !== "about" ? styles.link : styles.active} onClick={() => switchTab("about")}>
            <Link href="/#about">О проекте</Link>
          </li>
          <li className={current !== "howWorks" ? styles.link : styles.active} onClick={() => switchTab("howWorks")}>
            <Link href="/#howWorks">Как это работает</Link>
          </li>
          <li className={current !== "form" ? styles.link : styles.active} onClick={() => switchTab("form")}>
            <Link href="/#form">Исполнителям</Link>
          </li>
          <li className={current !== "examples" ? styles.link : styles.active} onClick={() => switchTab("examples")}>
            <Link href="/#examples">Примеры работ</Link>
          </li>
          <li
            className={current !== "advantages" ? styles.link : styles.active}
            onClick={() => switchTab("advantages")}
          >
            <Link href="/#advantages">Преимущества</Link>
          </li>
          {user ? (
            <div className="flex items-center gap-4 ml-auto">
              <Link href="/account/chats">
                <Icon className="text-light" glyph="mailFilled" />
              </Link>
              <HeaderAvatar />
            </div>
          ) : (
            <li className={styles.link} onClick={() => dispatch(openModal())}>
              Войти
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
