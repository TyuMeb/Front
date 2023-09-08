"use client";

import styles from "./head-block.module.scss";
import Image from "next/image";
import banner from "../../../../public/home/home-banner.jpg";
import Button from "@src/components/shared/ui/button/button";

export const HeadBlock = () => {
    return (
        <>
            <div>
                <div className={styles.banner}>
                    <div>
                        <Image
                            alt="banner"
                            src={banner}
                            placeholder="blur"
                            quality={100}
                            style={{
                                objectFit: "cover",
                                position: "absolute",
                                width: "100vw",
                                height: "554px",
                                zIndex: -1,
                            }}
                        />
                    </div>
                    <div className="container">
                        <h1 className={styles.title}>Создайте свой идеальный дом</h1>
                        <p className={styles.description}>
                            Сделайте заказ прямо сейчас, и мы подберём вам лучшие предложения за 24 часа
                        </p>
                        <Button
                            onClick={function (): void {
                                throw new Error("Function not implemented.");
                            }}>
                            Сделать заказ
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
