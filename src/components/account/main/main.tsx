"use client";

import styles from "./main.module.scss";
// import Image from "next/image";
// import banner from "../../../../public/home/home-banner.jpg";

import { Button } from "@src/components/shared/ui/button/button";

const HeadBlock = () => {
    return (
        <>
            <div>
                <div className="container">
                    <p className={styles.description}>
                        У вас пока нет заказов. Но вы всегда можете исправить это, создав его
                    </p>
                    <Button onClick={() => {}}>Сделать заказ</Button>
                </div>
            </div>
        </>
    );
};

export default HeadBlock;
