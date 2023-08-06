import styles from "./signin.module.css";
import Image from "next/image";
import illustration1 from "@public/signin_illustration1.png";
import illustration2 from "@public/signin_illustration2.png";
import { useCreateTokenMutation } from "@src/redux/api/jwt-api-slice";
import { useEffect } from "react";
import { setCookie, removeCookie } from "typescript-cookie";
const SignIn = () => {
    const [createToken] = useCreateTokenMutation();
    const data = {
        email: "rustamaaa@bk.ru",
        password: "rustamaaa1",
    };

    useEffect(() => {
        createToken(data)
            .unwrap()
            .then((res) => {
                setCookie("accessToken", res.access);
                localStorage.setItem("refreshToken", res.refresh);
                console.log("Авторизация прошла успешно");
            })
            .catch((error) => {
                console.log("Неверный логин или пароль");
                removeCookie("accessToken");
                localStorage.removeItem("refreshToken");
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.window}>
            <Image
                src={illustration1}
                alt={"иллюстрация двух людей которые говорят привет"}
                className={styles.illustration1}
            />
            <Image src={illustration2} alt={"иллюстрация города"} className={styles.illustration2} />
        </div>
    );
};

export default SignIn;
