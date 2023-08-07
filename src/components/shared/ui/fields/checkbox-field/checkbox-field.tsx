import React from "react";
import classNames from "classnames/bind";
import Icon from "@src/components/icon";

import styles from "./checkbox-field.module.scss";

const cx = classNames.bind(styles);

interface IСheckboxField {
    checked: boolean;
    handleChange: () => void;
}

export const СheckboxField = ({ checked, handleChange }: IСheckboxField) => {
    return (
        <>
            <input className={cx("checkboxFieldHide")} type="checkbox" checked={checked} onChange={handleChange} />
            <div className={cx("checkboxField")}>
                <Icon className={cx("checkboxFieldIcon")} glyph="checked" />
            </div>
        </>
    );
};

export default СheckboxField;
