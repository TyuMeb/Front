import React, { Children, createElement, useEffect, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@src/components/account/form";
import { filesListType } from "@src/components/account/form/formTypes";

type ChatFormType = {
    filesList: filesListType[];
    children: ReactElement[];
    onSubmit: SubmitHandler<FormValuesType>;
};

type FormValuesType = {
    chat: string;
    input: FileList;
    files: filesListType[];
};

const ChatForm = ({ filesList, children, onSubmit }: ChatFormType) => {
    const { register, handleSubmit, setValue } = useForm<FormValuesType>();

    useEffect(() => {
        setValue("files", filesList);
    }, [filesList]);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {Children.map(children, (child) => {
                    return child.props.name
                        ? createElement(child.type, {
                              ...{
                                  ...child.props,
                                  register: register,
                                  key: child.props.name,
                              },
                          })
                        : child;
                })}
            </Form>
        </>
    );
};

export default ChatForm;
