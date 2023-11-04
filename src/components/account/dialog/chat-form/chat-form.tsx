import React, { useState, LegacyRef } from "react";
import { useForm } from "react-hook-form";

import Paperclip from "@public/icons/paperclip.svg";
import { Button } from "@src/shared/ui/button";
import { Icon } from "@src/components/icon";
import { FileInput } from "@src/shared/ui/inputs/file/file";
import Textarea from "@src/components/account/form/textarea";
import PreviewFiles from "@src/components/account/form/preview-files";
import { filesType } from "@src/components/account/form/formTypes";

import styles from "./chat-form.module.scss";
import Form from "@src/components/account/form";

const ChatForm = ({ formRef }: { formRef: LegacyRef<HTMLDivElement> }) => {
    const [files, setFiles] = useState<filesType[] | []>([]);

    const {
        register,
        handleSubmit,
        formState: {},
    } = useForm({
        values: {
            chat: "",
            files: "",
        },
    });

    const onSubmitHandler = (data: { chat: string; files: string }) => {
        console.log(data);
    };

    return (
        <div className={styles.wrapper} ref={formRef}>
            <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Textarea {...register("chat")} />

                <FileInput
                    maxSizeFile={1000000}
                    maxSizeImage={1000000}
                    // accept=".png, .jpg, .jpeg"
                    multiple
                    setFiles={setFiles}
                    countFiles={files.length}
                    {...register("files")}>
                    <Paperclip />
                </FileInput>

                <Button className={styles.buttonSubmit}>
                    <Icon glyph="paper_airplane" />
                </Button>
            </Form>

            {files.length ? <PreviewFiles files={files} setFiles={setFiles} /> : undefined}
        </div>
    );
};

export default ChatForm;
