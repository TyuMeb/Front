import React, { useEffect, useState } from "react";
import { Input, IInput } from "@src/components/shared/ui/fields-new";

export const InputEmail = (props: IInput) => {
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
        emailMask(target.value);
        console.log(emailMask(target.value));
        console.log(target.value);
        emailMask(target.value) === true && setEmail(target.value);
        console.log(email);
    };

    return <Input value={email} onChange={(e) => handleEmailChange(e)} {...props} />;
};
