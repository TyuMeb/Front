"use client";

import { SyntheticEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
// import { useGetPostsIdQuery, useGetPostsQuery, useAddNewPostMutation } from "@src/redux/api-slice";
// import { useGetUsersQuery } from "@src/redux/another-api-slice";
import { useRegisterUserMutation, useLoginUserMutation } from "@src/redux/marketplace-api/authorization-api";
import { useGetUsersQuery, useGetMeQuery, useGetUserByIdQuery } from "@src/redux/marketplace-api/users-api";

import { sigIn } from "@src/redux/tokens-slice";
import { useUser } from "@src/hooks/use-user";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const ExampleApi = () => {
    // const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery({});
    // const { data: post, isFetching, isSuccess: isSuccessId } = useGetPostsIdQuery(1);
    // const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery({});
    const { data: users, isLoading, isSuccess, isError, error } = useGetUsersQuery({});

    useUser();

    const [
        loginUser,
        {
            data: loginData,
            isLoading: isLoginLoading,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();

    const [registerUser] = useRegisterUserMutation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("posts", users);
    }, [users]);

    // useEffect(() => {
    //     console.log("isLoading", isLoading);
    //     console.log("isSuccess", isSuccess);
    //     console.log("isError", isError);
    //     console.log("error", error);
    //     console.log("posts", posts);
    // }, [isLoading, isSuccess, isError, error, posts]);

    // useEffect(() => {
    //     console.log('isFetching', isFetching)
    //     console.log('isSuccessId', isSuccessId)
    //     console.log('post', post)
    // }, [isFetching, isSuccessId, post])

    // useEffect(() => {
    //     console.log("isLoading", isLoading);
    //     console.log("isSuccess", isSuccess);
    //     console.log("isError", isError);
    //     console.log("error", error);
    //     console.log("users", users);
    // }, [isLoading, isSuccess, isError, error, users]);

    useEffect(() => {
        if (isLoginSuccess) {
            console.log("Успешный вход");

            dispatch(sigIn({ jwtToken: loginData.access, refreshToken: loginData.refresh }));
            // Перебрасывать пользователя на главную страницу
        }
    }, [isLoginSuccess]);

    const handleSubmitSignIn = async (event: SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        const formState = { email: target.email.value, password: target.password.value };

        try {
            const result = await loginUser(formState).unwrap();

            if (result) {
                console.log(result.access);
                // dispatch(setCredentials(result.access));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitReg = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            emailReg: { value: string };
            nameReg: { value: string };
            phoneReg: { value: string };
            passwordReg: { value: string };
        };

        registerUser({
            email: target.emailReg.value,
            password: target.passwordReg.value,
            name: target.nameReg.value,
            person_telephone: target.phoneReg.value,
        })
            .unwrap()
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    };

    return (
        <>
            <section style={{ marginBottom: 50 }}>
                <h2>Авторизация</h2>
                <form onSubmit={handleSubmitSignIn}>
                    <label style={{ marginRight: 20 }}>
                        email
                        <input style={{ marginLeft: 10 }} name="email" />
                    </label>
                    <label style={{ marginRight: 20 }}>
                        пароль
                        <input style={{ marginLeft: 10 }} name="password" />
                    </label>
                    <button type="submit">Submit</button>
                    {isLoginLoading && <h1>Uploading...</h1>}
                </form>
            </section>

            <section style={{ marginBottom: 50 }}>
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmitReg}>
                    <label style={{ marginRight: 20 }}>
                        email
                        <input style={{ marginLeft: 10 }} name="emailReg" />
                    </label>
                    <label style={{ marginRight: 20 }}>
                        имя
                        <input style={{ marginLeft: 10 }} name="nameReg" />
                    </label>
                    <label style={{ marginRight: 20 }}>
                        телефон
                        <input style={{ marginLeft: 10 }} name="phoneReg" />
                    </label>
                    <label style={{ marginRight: 20 }}>
                        пароль
                        <input style={{ marginLeft: 10 }} name="passwordReg" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
};

export default ExampleApi;
