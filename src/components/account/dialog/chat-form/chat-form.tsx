import React, { FormEvent, useState } from "react";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { FileInput } from "@src/shared/ui/inputs/file/file";
import Textarea from "@src/components/account/form/textarea";
import PreviewFiles from "@src/components/account/form/preview-files";
import { filesType } from "@src/components/account/form/formTypes";

import styles from "./chat-form.module.scss";
import { useInput } from "@src/hooks/use-input";
import Form from "@src/components/account/form";

const ChatForm = () => {
    const [files, setFiles] = useState<filesType[] | []>([]);
    const chat = useInput("");

    const filterFiles = (files: filesType[], returnEl: "file" | "url") => {
        const res = [];
        for (let i = 0; i < files.length; i++) {
            if (!files[i].error) {
                res.push({ file: files[i][returnEl] });
            }
        }
        return res;
    };

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(chat.value, files, filterFiles(files, "file"), filterFiles(files, "url"));
    };

    return (
        <div className={styles.wrapper}>
            <Form onSubmit={onSubmitHandler}>
                <Textarea onChange={chat.onChange} />

                <FileInput
                    maxSizeFile={1000000}
                    maxSizeImage={1000000}
                    accept=".png, .jpg, .jpeg"
                    multiple
                    setFiles={setFiles}
                    countFiles={files.length}>
                    <Paperclip />
                </FileInput>

                <Button className={styles.buttonSubmit}>
                    <Icon glyph="paper_airplane" />
                </Button>
            </Form>

            <PreviewFiles files={files} setFiles={setFiles} />
        </div>
    );
};

export default ChatForm;
