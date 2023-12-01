import React, { useState } from "react";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { FileInput } from "@src/shared/ui/inputs/file/file";
import { Textarea } from "@src/components/account/form/textarea";
import { PreviewFiles } from "@src/components/account/form/preview-files";
import { Form } from "@src/components/account/form";
import classNames from "classnames/bind";

import { filesPreviewT, filesListT } from "@src/components/account/form/formTypes";

import styles from "./help.module.scss";

const cx = classNames.bind(styles);

export const Help = () => {
    const [filesPreview, setFilesPreview] = useState<filesPreviewT[] | []>([]);

    const onSubmitHandler = (data: { chat: string; files: filesListT[] }) => {
        const formFiles = new FormData();
        data.files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

        console.log(data.files, data.chat, formFiles, filesPreview);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
                <h2 className={styles.header}>Чат с поддержкой (ответ может занимать до 24ч)</h2>
            </div>
            <div className={styles.wrapperForm}>
                <Form onSubmit={onSubmitHandler} filesPreview={filesPreview}>
                    <Textarea name="chat" />

                    <FileInput
                        name="input"
                        maxSizeFile={1000000}
                        maxSizeImage={100000}
                        maxCountFiles={6}
                        // accept=".png, .jpg, .jpeg"
                        disabled={filesPreview.length >= 6 && true}
                        multiple
                        setFilesPreview={setFilesPreview}>
                        <Paperclip className={cx({ disabled: filesPreview.length >= 6 && true })} />
                    </FileInput>

                    <Button className={styles.buttonSubmit}>
                        <Icon glyph="paper_airplane" />
                    </Button>
                </Form>

                {filesPreview.length ? (
                    <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} />
                ) : undefined}
            </div>
        </div>
    );
};
