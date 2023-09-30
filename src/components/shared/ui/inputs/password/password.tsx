import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./password.module.scss";
import { Input, IInputProps } from "@src/components/shared/ui/inputs";
import Icon from "@src/components/icon";

const cx = classNames.bind(styles);

const Password = (props: IInputProps) => {
    const { type, ...restProps } = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className={cx("container")}>
            <Input type={showPassword ? "text" : "password"} {...restProps} />

            <button
                className={cx("buttonShowPassword")}
                type="button"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}>
                {showPassword ? (
                    <Icon className={cx("icon")} glyph="eye" />
                ) : (
                    <Icon className={cx("icon")} glyph="open_eye" />
                )}
            </button>
        </div>
    );
};

export default Password;
