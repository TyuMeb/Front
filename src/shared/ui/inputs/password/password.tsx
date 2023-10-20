import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./password.module.scss";
import Icon from "@src/components/icon";
import { InputProps, Input } from "../input";

const cx = classNames.bind(styles);

const Password = (props: InputProps) => {
    const { type, ...restProps } = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={cx("container")}>
            <Input type={showPassword ? "text" : "password"} {...restProps} />

            <button
                className={cx("buttonShowPassword")}
                type="button"
                onMouseDown={!restProps.disabled ? () => setShowPassword(true) : undefined}
                onMouseUp={() => setShowPassword(false)}>
                {showPassword ? (
                    <Icon className={cx("icon")} glyph="open_eye" />
                ) : (
                    <Icon className={cx("icon")} glyph="eye" />
                )}
            </button>
        </div>
    );
};

export default Password;
