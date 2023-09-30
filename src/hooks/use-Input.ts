import { ChangeEvent, useState } from "react";

export default function useInput(initialValue: string) {
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
