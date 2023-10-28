import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.currentTarget;

        if (target) {
            setValue(target.value);
        }
    };

    return {
        value,
        onChange,
    };
}
