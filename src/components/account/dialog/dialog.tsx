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
import { useUser } from "@src/redux/slices/users-slice";
import { UserAccount } from "@src/redux/api/generated";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

type TMessage = {
  id: number;
  sent_at: string;
  sender: string;
  text: string;
  unread?: boolean;
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
  const ws = useRef<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<TMessage[]>([]);
  const [email, setEmail] = useState<string>("");
  const params = useParams();
  const ua: UserAccount | null = useUser();

  useEffect(() => {
    if (ua) {
      setEmail(ua.email);

      if (!ws.current)
        ua.role === "client"
          ? (ws.current = new WebSocket(`wss://api.whywe.ru/ws/chat/${params.order}/`, getCookie("access_token")))
          : (ws.current = new WebSocket(`wss://api.whywe.ru/ws/chat/${params.order}/`, getCookie("access_token")));

      const getMessages = () => {
        ws.current?.send(JSON.stringify({ command: "fetch_messages", message: "fetch" }));
      };

      const showData = (e: MessageEvent) => {
        const { messages } = JSON.parse(e.data);
        if (messages) {
          setMessagesList(
            messages.sort((a: TMessage, b: TMessage) => {
              if (dayjs(a.sent_at) > dayjs(b.sent_at)) return 1;
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
    }
  }, [ua]);

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
    // console.log({ files, text: data.chat, formData: formFiles, filesPreview });
    // ws.current?.send(
    //   JSON.stringify({ command: "new_message", message: { files, text: data.chat, formData: formFiles, filesPreview } })
    // );
    ws.current?.send(JSON.stringify({ command: "new_message", message: data.chat }));
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

      <Chat heightForm={measuredForm.elementHeight} heightDialog={measuredDialog.elementHeight}>
        {messagesList.map((m, i) => (
          <MessageItem
            key={i}
            text={m.text}
            messageId={m.id}
            sent={
              dayjs().isSame(dayjs(m.sent_at), "day")
                ? dayjs(m.sent_at).format("HH:mm")
                : dayjs(m.sent_at).format("DD.MM.YYYY")
            }
            unread={!!(i % 2)}
            isMyMessage={email === m.sender}
            avaColor="red"
          />
        ))}
      </Chat>

      <div className={styles.wrapperForm} ref={measuredForm.getObserver}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <WrapperForm>
            <Controller
              control={control}
              name="chat"
              render={({ field: { onChange, value, ref } }) => (
                <Textarea
                  onChange={onChange}
                  onKeyUp={(e) => {
                    if (e.key == "Enter" && e.ctrlKey) handleSubmit(onSubmitHandler)();
                  }}
                  defaultValue=""
                  value={value}
                  ref={ref}
                />
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
