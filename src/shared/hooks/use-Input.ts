import { useState } from "react";

export default function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (value: string) => setValue(value);

    return {
        value,
        onChange,
    };
}
