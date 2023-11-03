import { ChangeEvent, useState } from "react";

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            setValue(e.target.value);
        }
    };

    return {
        value,
        onChange,
    };
}

console.log(1);
