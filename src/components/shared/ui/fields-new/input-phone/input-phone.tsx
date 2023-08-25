import React from "react";
import InputMask from "react-input-mask";
import { Input, IInput } from "@src/components/shared/ui/fields-new";

interface IInputPassword extends IInput {
    onFocus: (() => void) | undefined;
    onBlur: (() => void) | undefined;
}

export const InputPhone = (props: IInputPassword) => {
    const { onChange, onBlur, onFocus, disabled, value, ...restProps } = props;

    const getInput = () => (
        <InputMask
            mask="+7 (999) 999-99-99"
            value={props.value}
            onFocus={props.onFocus}
            disabled={props.disabled}
            onBlur={props.onBlur}
            onChange={props.onChange}>
            <Input {...restProps} />
        </InputMask>
    );

    return getInput();
};
