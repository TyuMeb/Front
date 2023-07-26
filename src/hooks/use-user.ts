import { useRefreshTokenMutation, useVerifyTokenMutation } from "@src/redux/marketplace-api/authorization-api";
import { useEffect } from "react";
import { useAppDispatch } from "@src/redux/hooks";
import { setCookie, getCookie } from "@src/helpers/cookie";
import { sigIn } from "@src/redux/tokens-slice";

export const useUser = () => {
    const [verifyToken] = useVerifyTokenMutation();
    const [refreshToken, { data, isError }] = useRefreshTokenMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const jwtToken = getCookie("jwtToken");
        const resetToken = localStorage.getItem("refreshToken");

        try {
            if (jwtToken) {
                verifyToken({ token: jwtToken });
                return;
            }

            if (!jwtToken && resetToken) {
                refreshToken({ refresh: resetToken })
                    .unwrap()
                    .then((data) => {
                        setCookie("jwtToken", data.access);
                        dispatch(sigIn({ jwtToken: data.access }));
                        console.log(data.access);
                    })
                    .catch((e) => {
                        throw new Error(e);
                    });
            }
        } catch (e) {
            console.log(e);
        }
    }, []);
};
