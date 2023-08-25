import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import open_eye from "@public/icons/open_eye.svg";
import eye from "@public/icons/eye.svg";
import styles from "./input-password.module.scss";
import { Input, IInput } from "@src/components/shared/ui/fields-new";

const cx = classNames.bind(styles);

interface IInputPassword extends IInput {
    onFocus: (() => void) | undefined;
    onBlur: (() => void) | undefined;
}

export const InputPassword = (props: IInputPassword) => {
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
                {showPassword ? <Image priority src={open_eye} alt={""} /> : <Image priority src={eye} alt={""} />}
            </button>
        </div>
    );
};

export default InputPassword;
