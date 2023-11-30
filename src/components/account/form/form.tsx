import React, { createElement, useEffect, Children, ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { filesPreviewType, filesListType } from "@src/components/account/form/formTypes";

import styles from "./form.module.scss";

type ChatFormType<T> = {
    filesPreview: filesPreviewType[];
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
    filesPreview,
    className,
    children,
    onSubmit,
    ...props
}: ChatFormType<{ [key: string]: {} }>) => {
    const { register, handleSubmit, setValue } = useForm<FormValuesType>({ defaultValues });

    useEffect(() => {
        // filesPreview.filter((file) => !file.error);
        const newArr = [] as filesListType[];
        filesPreview.forEach((file) => {
            if (!file.error) {
                newArr.push({ id: file.id, file: file.file });
            }
        });
        setValue("files", newArr);
    }, [filesPreview]);

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
