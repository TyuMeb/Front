"use client";
import { useGetPostsIdQuery, useGetPostsQuery, useAddNewPostMutation } from "@src/redux/api-slice";
import { SyntheticEvent, useEffect } from "react";
import { useGetUsersQuery } from "@src/redux/another-api-slice";

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
    const [addNewPost, { isLoading }] = useAddNewPostMutation();

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

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: { value: string };
            body: { value: string };
        };

        addNewPost({ title: target.title.value, body: target.body.value, user: 1 })
            .unwrap()
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label style={{ marginRight: 20 }}>
                    Type title
                    <input style={{ marginLeft: 10 }} name="title" />
                </label>
                <label style={{ marginRight: 20 }}>
                    Type body
                    <input style={{ marginLeft: 10 }} name="body" />
                </label>
                <button type="submit">Submit</button>
                {isLoading && <h1>Uploading...</h1>}
            </form>
        </section>
    );
};

export default ExampleApi;
