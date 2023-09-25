import React, { useState } from "react";
import { IInputProps, Input } from "../../text-input/text-input";

const InputEmail = (props: IInputProps) => {
    const { onChange, ...restProps } = props;

    const [email, setEmail] = useState("");

    const emailMask = (value: string) => {
        if (/^[a-z0-9_\.-]+$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
        if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value)) return true;
        return false;
    };

    const handleEmailChange = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        !target.value && setEmail(target.value);
        emailMask(target.value);
        console.log(emailMask(target.value));
        console.log(target.value);
        emailMask(target.value) && setEmail(target.value);
    };

    return (
        <Input
            value={email}
            onChange={(e) => handleEmailChange(e)}
            errorMessage="Неверный e-mail"
            textLabel="E-mail"
            placeholder={"Введите e-mail"}
            inputMode={"email"}
            {...restProps}
        />
    );
};

export default InputEmail;
