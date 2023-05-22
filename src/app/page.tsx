"use client";

import { Button } from "@/components/UI/button/button";
import styles from "./page.module.css";
import clsx from "clsx";
import { Open_Sans, Raleway } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.banner}>
                <div className={styles.box}>
                    <div>
                        <h1 className={clsx(raleway.className, "h1")}>Создайте свой идеальный дом</h1>
                        <p className={clsx(openSans.className, styles.p)}>
                            Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
                        </p>
                        <Button onClick={() => {}}>Сделать заказ</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
