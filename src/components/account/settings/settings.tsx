"use client";

import styles from "./settings.module.scss";
import { Button } from "@src/components/shared/ui/button/button";

const Settings = () => {
    return (
        <div className={styles.settings}>
            Надо добавить инпуты и чекбоксы.
            <Button onClick={() => {}}>Редактировать</Button>
        </div>
    );
};

export default Settings;
