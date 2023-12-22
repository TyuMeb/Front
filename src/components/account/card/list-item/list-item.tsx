"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./list-item.module.scss";
import { getIconFile } from "@src/helpers/getIconFile";
import { getRandomKey } from "@src/helpers";

type Description = {
    name: string;
    value?: ReactNode | string;
    selected?: boolean;
    files?: File[];
};

type ListItemProps = {
    description: Description;
} & HTMLAttributes<HTMLDivElement>;

const renderFiles = (files: File[]) => {
    return (
        <ul className={styles.wrapperFiles}>
            {files?.map((file, i) => {
                return (
                    <li key={i} className={styles.itemFiles}>
                        {getIconFile(file.type)}
                        <p className="text-small">{getRandomKey()}.pdf</p>
                    </li>
                );
            })}
        </ul>
    );
};

export const ListItem = ({ description, children, ...props }: ListItemProps) => {
    const { name, files, selected, value } = description;

    const renderItem = (children: ReactNode) => {
        return (
            <div className={styles.item} {...props}>
                <p className="text-small">
                    <span className={styles.decor}>{name}</span>
                </p>
                {children}
            </div>
        );
    };

    return (
        <>
            {files && renderItem(renderFiles(files))}

            {value && renderItem(<p className={`${selected ? "text-small-semibold" : "text-small"}`}>{value}</p>)}
        </>
    );
};
