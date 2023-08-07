import React, { forwardRef } from "react";
import styles from "./form.module.scss";

import { Input } from "@src/components/shared/ui/input/input";
import { Button } from "@src/components/shared/ui/button/button";

const Form = forwardRef((formRef) => {
    return (
        <section className={styles.section} id="form" ref={(ref) => (formRef ? formRef : null)}>
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
        </section>
    );
});
Form.displayName = "Form";
export default Form;
