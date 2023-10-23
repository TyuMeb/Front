import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./password.module.scss";
import { Icon } from "@src/components/icon";
import { InputProps, Input } from "../input";

const cx = classNames.bind(styles);

export const PasswordInput = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={cx("container")}>
            <Input {...props} type={showPassword ? "text" : "password"} />

            <button
                className={cx("buttonShowPassword")}
                type="button"
                onMouseDown={!props.disabled ? () => setShowPassword(true) : undefined}
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
