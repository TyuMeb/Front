import { useRefreshTokenMutation, useVerifyTokenMutation } from "@src/redux/marketplace-api";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@src/redux/hooks";
import { setCookie } from "@src/helpers/cookie";
import { logout } from "@src/redux/tokens-slice";

export const useUser = () => {
    const [verifyToken] = useVerifyTokenMutation();
    const [refreshToken, { data: refreshData, isSuccess: isRefreshSuccess }] = useRefreshTokenMutation();
    const dispatch = useAppDispatch();

    const { jwtToken, resetToken } = useAppSelector((store) => store.tokens);

    useEffect(() => {
        try {
            if (!jwtToken && resetToken) {
                // await
                const result = refreshToken({ refresh: resetToken }).unwrap();
                console.log(refreshData, "это");
                setCookie("jwtToken", refreshData.access);
            }
        } catch (e) {
            console.log(e);
            dispatch(logout());
        }

        // try {
        //     if (jwtToken) {
        //         verifyToken({token: jwtToken})
        //         return
        //     }
        // } catch (e) {
        //     console.log(e);
        //     // Тут должен быть код
        // }

        // try {
        //     if (refreshToken) {
        //         resetToken({refresh: refreshToken})
        //         // Добавить новый токен в куки
        //         return
        //     }
        // } catch (e) {
        //     console.log(e);
        //     // Удалить в куки токен и refresh в локалке
        // }
    }, [isRefreshSuccess]);
};
