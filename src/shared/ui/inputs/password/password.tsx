import React, { forwardRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./password.module.scss";
import { Icon } from "@src/components/icon";
import { InputProps, Input } from "../input";

const cx = classNames.bind(styles);

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={cx("container")}>
      <Input ref={ref} {...props} type={showPassword ? "text" : "password"} />

      <button
        className={cx("buttonShowPassword")}
        type="button"
        onClick={!props.disabled ? () => setShowPassword(!showPassword) : undefined}>
        {showPassword ? <Icon className={cx("icon")} glyph="open_eye" /> : <Icon className={cx("icon")} glyph="eye" />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
