import React, { FormEvent, useState } from "react";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { FileInput } from "@src/shared/ui/inputs/file/file";
import Textarea from "./textarea";
import PreviewFiles from "./previewFiles";
import { filesType } from "./formTypes";

import styles from "./form.module.scss";
import { useInput } from "@src/hooks/use-input";

const Form = () => {
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
        <div>
            <div className={styles.wrapper}>
                <form className={styles.formChat} onSubmit={onSubmitHandler}>
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
                </form>
            </div>

            <PreviewFiles files={files} setFiles={setFiles} />
        </div>
    );
};

export default Form;
