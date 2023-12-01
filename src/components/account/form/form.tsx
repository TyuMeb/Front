import React, { createElement, useEffect, Children, ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { filesPreviewT, filesListT } from "@src/components/account/form/formTypes";

import styles from "./form.module.scss";

type ChatFormT<T> = {
    filesPreview: filesPreviewT[];
    onSubmit: SubmitHandler<FormValuesT>;
    defaultValues?: T;
    children: ReactElement[];
    className?: string;
};

type FormValuesT = {
    chat: string;
    input: FileList;
    files: filesListT[];
};

export const Form = ({
    defaultValues,
    filesPreview,
    className,
    children,
    onSubmit,
    ...props
}: ChatFormT<{ [key: string]: {} }>) => {
    const { register, handleSubmit, setValue } = useForm<FormValuesT>({ defaultValues });

    useEffect(() => {
        const newArr = [] as filesListT[];
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
