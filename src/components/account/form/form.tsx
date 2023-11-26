import React, { createElement, useEffect, Children, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { filesListType } from "@src/components/account/form/formTypes";

import styles from "./form.module.scss";

type ChatFormType<T> = {
    filesList: filesListType[];
    onSubmit: SubmitHandler<FormValuesType>;
    defaultValues?: T;
    children: ReactElement[];
    className?: string;
};

type FormValuesType = {
    chat: string;
    input: FileList;
    files: filesListType[];
};

const Form = ({
    defaultValues,
    filesList,
    className,
    children,
    onSubmit,
    ...props
}: ChatFormType<{ [key: string]: {} }>) => {
    const { register, handleSubmit, setValue } = useForm<FormValuesType>({ defaultValues });

    useEffect(() => {
        setValue("files", filesList);
    }, [filesList]);

    return (
        <div className={styles.wrapper}>
            <form className={`${styles.formChat} ${className}`} onSubmit={handleSubmit(onSubmit)} {...props}>
                {Children.map(children, (child) => {
                    return child?.props.name
                        ? createElement(child.type, {
                              ...{
                                  ...child.props,
                                  register: register,
                                  key: child.props.name,
                              },
                          })
                        : child;
                })}
            </form>
        </div>
    );
};

export default Form;
