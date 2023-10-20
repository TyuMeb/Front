import { Button } from "@src/shared/ui/button";
import styles from "./form.module.scss";
import { Input } from "@src/shared/ui/inputs";

export const Form = () => {
    return (
        <section className={styles.inner} id="form">
            <p className={styles.description}>
                Хотите стать одним из исполнителей на ВайВи? — оставьте заявку и мы с вами свяжемся. Мы готовы
                предоставить постоянный поток клиентов и взаимовыгодное сотрудничество
            </p>
            <form action="">
                <div className={styles.inputs}>
                    <Input placeholder="Имя" required />
                    <Input placeholder="Номер телефона" type="tel" maxLength={11} required />
                </div>
                <Button>Связаться</Button>
            </form>
        </section>
    );
};
