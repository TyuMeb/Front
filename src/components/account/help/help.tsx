import React, { useState } from "react";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { InputPreviewFiles } from "@src/components/account/form/input-preview-files";
import { Textarea } from "@src/components/account/form/textarea";
import { PreviewFiles } from "@src/components/account/form/preview-files";
import { Form } from "@src/components/account/form";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";

import { filesPreviewProps, filesListProps } from "@src/components/account/form/formTypes";

import styles from "./help.module.scss";

const cx = classNames.bind(styles);

export const Help = () => {
    const [filesPreview, setFilesPreview] = useState<filesPreviewProps[] | []>([]);

    const { handleSubmit, register } = useForm({
        values: {
            chat: "",
        },
    });

    const getFiles = (filesList: filesPreviewProps[]) => {
        const files = [] as filesListProps[];

        filesList.forEach((file) => {
            if (!file.error) {
                files.push({ id: file.id, file: file.file });
            }
        });

        return files;
    };

    const onSubmitHandler = (data: { chat: string }) => {
        const files = getFiles(filesPreview);

        const formFiles = new FormData();
        files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log({ files, text: data.chat, formData: formFiles, filesPreview });
    };

    const settingsInput = {
        settings: {
            maxSizeFile: 1000000,
            maxSizeImage: 100000,
            maxCountFiles: 6,
            multiple: true,
            // accept=".png, .jpg, .jpeg"},
        },
        disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
                <h2 className="subtitle2">Чат с поддержкой (ответ может занимать до 24ч)</h2>
            </div>
            <div className={styles.wrapperForm}>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Textarea
                        {...register("chat", {
                            required: true,
                        })}
                    />

                    <InputPreviewFiles
                        disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
                        {...settingsInput.settings}
                        setFilesPreview={setFilesPreview}>
                        <Paperclip
                            className={cx({ disabled: filesPreview.length >= settingsInput.settings.maxCountFiles })}
                        />
                    </InputPreviewFiles>

                    <Button className={styles.buttonSubmit} type="submit">
                        <Icon glyph="paper_airplane" />
                    </Button>
                </Form>

                {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
            </div>
        </div>
    );
};
