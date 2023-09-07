"use client";

import styles from "./nav-account.module.scss";
// import { useEffect, useState } from "react";
// import { useAppSelector } from "@src/redux/hooks";
import { ExitButton } from "@src/components/shared/ui/button/exit-button";

const NavAccount = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headeraccount}>
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li className={styles.menuitem}>
                            <a className={styles.menulink} href="">
                                Мои заказы
                            </a>
                        </li>
                        <span></span>
                        <li className={styles.menuitem}>
                            <a className={styles.menulink} href="">
                                Полка настенная
                            </a>
                        </li>
                        <span></span>
                        <li className={styles.menuitem}>
                            <a className={styles.menulink} href="">
                                чат с исполнителем 1
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.avatar}></div>
                <ExitButton onClick={() => {}}>Выйти</ExitButton>
            </div>
        </div>
    );
};

export default NavAccount;

// const NavAccount = () => {
//     const [current, setCurrent] = useState<string | undefined>(undefined);
//     const { contentBlock } = useAppSelector((store) => store.nav);

//     useEffect(() => {
//         setCurrent(contentBlock);
//     }, [contentBlock]);

//     const switchTab = (tab: string) => {
//         setCurrent(tab);
//         const element: HTMLElement | null = document.getElementById(tab);
//         if (element) {
//             element.id === "form"
//                 ? element.scrollIntoView({ behavior: "smooth", block: "center" })
//                 : element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//     };

//     return (
//         <nav className={styles.nav}>
//             <ul className={styles.list}>
//                 <li
//                     className={current !== "myorders" ? styles.myorders : styles.active}
//                     onClick={() => switchTab("myorders")}>
//                     Мои заказы
//                 </li>
//                 <li className={current !== "chats" ? styles.chats : styles.active} onClick={() => switchTab("chats")}>
//                     Чаты
//                 </li>
//                 <li
//                     className={current !== "archives" ? styles.archives : styles.active}
//                     onClick={() => switchTab("archives")}>
//                     Архивы
//                 </li>
//                 <li
//                     className={current !== "settings" ? styles.settings : styles.active}
//                     onClick={() => switchTab("settings")}>
//                     Настройки
//                 </li>
//                 <li className={current !== "help" ? styles.help : styles.active} onClick={() => switchTab("help")}>
//                     Помощь
//                 </li>
//                 <li
//                     className={current !== "makeorder" ? styles.makeorder : styles.active}
//                     onClick={() => switchTab("makeorder")}>
//                     Сделать заказ
//                 </li>
//             </ul>
//             <div className={styles.exitbutton}>
//                 <ExitButton onClick={() => {}}>Выйти</ExitButton>
//             </div>
//         </nav>
//     );
// };

// export default NavAccount;
