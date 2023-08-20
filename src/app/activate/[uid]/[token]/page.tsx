"use client";

import React, { useEffect } from "react";
import { Home } from "@src/components/home";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/slices/modal-slice";
import { useVerifyUserQuery } from "@src/redux/api/auth-api-slice";
import { useRouter } from "next/navigation";

export default function Page() {
    const params = useParams();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data, isSuccess, error } = useVerifyUserQuery(params, { refetchOnReconnect: true });

    useEffect(() => {
        /*         isSuccess && router.push('/')
                error && console.log("error", error); */

        if (isSuccess) {
            router.push("/");
            return;
        }
        if (error) {
            console.log("error", error);
        }

        /*       if (isSuccess) {
            router.push('/');
        } else if (error) {
            console.log("error", error);
        } */
    }, []);

    return <Home />;
}
