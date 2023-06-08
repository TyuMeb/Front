"use client";

import styles from "./form.module.scss";

import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";

export const Form = () => {
    return (
        <div className={styles.inner}>
            <p className={styles.description}>
                Хотите стать одним из исполнителей на ВайВи? — оставьте заявку и мы с вами свяжемся. Мы готовы
                предоставить постоянный поток клиентов и взаимовыгодное сотрудничество
            </p>
            <form action="">
                <div className={styles.inputs}>
                    <Input placeholder="Имя" required />
                    <Input placeholder="Номер телефона" type="tel" maxLength={11} required />
                </div>
                <Button onClick={() => {}}>Связаться</Button>
            </form>
        </div>
    );
};

