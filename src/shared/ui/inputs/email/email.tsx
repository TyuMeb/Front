import React, { ChangeEvent } from "react";

import { emailMask, regexEmailList } from "@src/helpers/emailMask";
import { InputProps, Input } from "../input";

const Email = (props: InputProps) => {
    const { onChange, ...restProps } = props;

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        emailMask(regexEmailList, value) && onChange?.(e);
    };

    return <Input onChange={(e) => handleEmailChange(e)} {...restProps} />;
};

export default Email;
