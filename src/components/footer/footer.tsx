import styles from "./footer.module.css";
import Image from "next/image";
import vk from "@public/vk.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.logo}>ВайВи</h1>
                    <p className={styles.text}>
                        Сервис по заказу корпусной мебели онлайн, который помогает создать уникальный продукт специально
                        для вас
                    </p>
                    <div className={styles.icon}>
                        <Image src={vk} alt="vk icon" />
                    </div>
                    <div className={styles.copy}>© {new Date().getFullYear()}</div>
                </div>
                <div className={styles.right}>
                    <ul className={styles.list}>
                        <li className={styles.link}>Информация</li>
                        <li className={styles.link}>О проекте</li>
                        <li className={styles.link}>Как это работает</li>
                        <li className={styles.link}>Исполнителям</li>
                        <li className={styles.link}>Примеры</li>
                        <li className={styles.link}>Преимущества</li>
                    </ul>

                    <ul className={styles.list}>
                        <li className={styles.link}>Контакты</li>
                        <li className={styles.link}>+79999999999</li>
                        <li className={styles.link}>fbdjkfаsdjo.com</li>
                        <li className={styles.link}>telegram</li>
                        <li className={styles.link}>Address goes here</li>
                    </ul>

                    <ul className={styles.list}>
                        <li className={styles.link}>Безопасность</li>
                        <li className={styles.link}>политика конфиденциальности</li>
                        <li className={styles.link}>что-g. еще</li>
                        <li className={styles.link}>и еще?</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
