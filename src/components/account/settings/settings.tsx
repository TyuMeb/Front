"use client";

import styles from "./settings.module.scss";
import { Button } from "@src/components/shared/ui/button/button";

const Settings = () => {
    return (
        <div className={styles.settings}>
            Имя Фамилия <br />
            Телефон E-mail <br />
            Пароль Повторите пароль
            <Button onClick={() => {}}>Редактировать</Button>
            Получать уведомления
            <div className={styles.delete}>
                <ul className={styles.row}>
                    <li>Удаление профиля</li>
                    <li>
                        Если вы хотите удалить профиль, пожалуйста, <br />
                        свяжитесь с нашей технической поддержкой на <br />
                        вкладке «помощь»
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Settings;
