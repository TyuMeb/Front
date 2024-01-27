"use client";

import React, { useState, useEffect, HTMLAttributes, useRef } from "react";
import styles from "./dialog.module.scss";
import { Button } from "@src/shared/ui/button";
import { WrapperForm, InputPreviewFiles, PreviewFiles, FilesPreview } from "@src/components/account/wrapper-form";
import { Textarea } from "@src/shared/ui/inputs/textarea";

import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";
import { useForm, Controller } from "react-hook-form";
import { useMeasuredRef } from "@src/hooks/use-measured-ref";
import { getFiles } from "@src/helpers/getFiles";
import { WrapperInfo } from "./wrapper-info";
import { Chat } from "./chat/chat";
import { getCookie } from "typescript-cookie";
import { MessageItem } from "./message-item/message-item";

type TMessage = {
  id: number;
  sent_at: string;
  sender: string;
  text: string;
  unread?: boolean;
};

const email = "user0@mail.ru";

const dateConverter = (d: string): string => {
  const messageDate = new Date(d);
  const currDate = new Date();
  if (messageDate.getDate() !== currDate.getDate())
    return `
      ${messageDate.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })}.
      ${(messageDate.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}.
      ${messageDate.getFullYear()}`;
  return `
    ${messageDate.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
    ${messageDate.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
};

export type OrderInfo = {
  customer?: string;
  name: string;
  termOfExecution: string;
  price: string;
  index: number;
};

export type DialogProps = {
  orderInfo: OrderInfo;
} & HTMLAttributes<HTMLDivElement>;

export const Dialog = ({ orderInfo, ...props }: DialogProps) => {
  const measuredForm = useMeasuredRef();
  const measuredDialog = useMeasuredRef();
  const [filesPreview, setFilesPreview] = useState<FilesPreview[] | []>([]);
  // const dispatch = useAppDispatch();
  // const { selectedPerformer } = useAppSelector((store) => store.account);
  const ws = useRef<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);

  useEffect(() => {
    if (!ws.current) ws.current = new WebSocket("wss://api.whywe.ru/ws/chat/2/", getCookie("access_token"));

    const getMessages = () => {
      ws.current?.send(JSON.stringify({ command: "fetch_messages", message: "fetch" }));
    };

    const showData = (e: MessageEvent) => {
      const { messages } = JSON.parse(e.data);
      if (messages) {
        setMessagesList(
          messages.sort((a: TMessage, b: TMessage) => {
            if (new Date(a.sent_at) > new Date(b.sent_at)) return 1;
            else return -1;
          })
        );
        console.log(messages);
      } else {
        const { message, sender } = JSON.parse(e.data);
        setMessagesList((messages) => [
          ...messages,
          { id: 9999, sender: sender, text: message, sent_at: new Date().toString() },
        ]);
      }
    };
    ws.current?.addEventListener("open", getMessages);
    ws.current?.addEventListener("message", showData);

    return () => {
      ws.current?.removeEventListener("open", getMessages);
      ws.current?.removeEventListener("message", showData);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [measuredForm.elementHeight, messagesList]);

  const { handleSubmit, resetField, control } = useForm({
    defaultValues: {
      chat: "",
    },
  });

  const onSubmitHandler = (data: { chat: string }) => {
    const files = getFiles(filesPreview);

    const formFiles = new FormData();
    files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));
    console.log({ files, text: data.chat, formData: formFiles, filesPreview });
    ws.current?.send(
      JSON.stringify({ command: "new_message", message: { files, text: data.chat, formData: formFiles, filesPreview } })
    );
    resetField("chat");
  };

  const settingsInput = {
    settings: {
      maxSizeFile: 1000000,
      maxSizeImage: 100000,
      maxCountFiles: 6,
      multiple: true,
    },
    disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
  };

  return (
    <article className={styles.dialog} {...props}>
      <WrapperInfo orderInfo={orderInfo} getObserver={measuredDialog.getObserver} />

      <div
        style={{
          marginBottom: `${measuredForm.elementHeight + 28}px`,
          marginTop: `${measuredDialog.elementHeight}px`,
        }}
        className={styles.wrapper}
      >
        {messagesList.map((m, i) => (
          <MessageItem
            key={i}
            text={m.text}
            messageId={m.id}
            sent={dateConverter(m.sent_at)}
            unread={!!(i % 2)}
            isMyMessage={email === m.sender}
            avaColor="red"
          />
        ))}
      </div>

      <Chat heightForm={measuredForm.elementHeight} heightDialog={measuredDialog.elementHeight} />

      <div className={styles.wrapperForm} ref={measuredForm.getObserver}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <WrapperForm>
            <Controller
              control={control}
              name="chat"
              render={({ field: { onChange, value, ref } }) => (
                <Textarea onChange={onChange} defaultValue="" value={value} ref={ref} />
              )}
            />

            <InputPreviewFiles
              disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
              {...settingsInput.settings}
              setFilesPreview={setFilesPreview}
            >
              <Paperclip />
            </InputPreviewFiles>

            <Button className={styles.buttonSubmit} type="submit">
              <Icon glyph="paper_airplane" />
            </Button>
          </WrapperForm>
        </form>
        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </article>
  );
};
