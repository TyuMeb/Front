import React, { ChangeEvent } from "react";
import { IInputProps, Input } from "@src/components/shared/ui/inputs";
import { emailMask, regexEmailList } from "@src/helpers/emailMask";

const Email = (props: IInputProps) => {
    const { onChange, ...restProps } = props;

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        emailMask(regexEmailList, value) && onChange(e);
    };

    return <Input onChange={(e) => handleEmailChange(e)} {...restProps} />;
};

export default Email;
