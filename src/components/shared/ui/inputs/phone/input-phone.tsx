import React, { ChangeEvent } from "react";
import { IInputProps, Input } from "@src/components/shared/ui/text-input";
import { phoneMask } from "@src/helpers/phoneMask";

const InputPhone = (props: IInputProps) => {
    const { onChange, ...restProps } = props;

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): ChangeEvent<HTMLInputElement> =>
        phoneMask(e, props.value);

    return <Input onChange={(e) => onChange(handlePhoneChange(e))} {...restProps} />;
};

export default InputPhone;
