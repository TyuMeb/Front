"use client";

import React, { useState, useEffect, HTMLAttributes } from "react";
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
import { Message } from "@src/redux/api/generated";
import dayjs from "dayjs";

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
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const [unreadMessagesQty, SetUnreadMessagesQty] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<"client" | "contractor" | null>(null);
  const params = useParams();
  const user: UserAccount | null = useUser();

  useEffect(() => {
    console.log(unreadMessagesQty);
  }, [unreadMessagesQty]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      if (user?.role === "client") setRole("client");
      else if (user?.role === "contractor") setRole("contractor");
      else setRole(null);
    }
  }, [user]);

  useEffect(() => {
    let unreadQty: number = 0;
    if (messagesList.length && email) {
      unreadQty = messagesList.reduce(
        (acc, message) => (!message.is_read && message.sender != email ? (acc += 1) : acc),
        0
      );
    }
    SetUnreadMessagesQty(unreadQty);
  }, [messagesList]);

  useEffect(() => {
    if (!websocket) return;

    let timer: ReturnType<typeof setTimeout>;

    const wsInit = (): void => {
      if (role === "client" || role === "contractor")
        setWebsocket(new WebSocket(`wss://api.whywe.ru/ws/chat/${params.chatId}/`, getCookie("access_token")));
    };

    const getMessages = () => {
      console.log("Connection established");
      console.log(websocket);
      if (websocket?.readyState === 1) websocket.send(JSON.stringify({ command: "fetch_messages", message: "fetch" }));
    };

    const wsReconnect = () => {
      timer = setTimeout(() => {
        console.log("Reconnect attempt");
        wsInit();
      }, 5000);
    };

    const wsErrorHandler = () => {
      console.log("Websocket error");
      wsReconnect();
    };

    const showData = (e: MessageEvent) => {
      const messages = JSON.parse(e.data);

      // TODO: ДОБАВИТЬ ОТОБРАЖЕНИЕ ПРЕВЬЮ ФАЙЛОВ

      if (Array.isArray(messages)) {
        setMessagesList(
          messages.sort((a: Message, b: Message) => {
            if (dayjs(a.sent_at) > dayjs(b.sent_at)) return 1;
            else return -1;
          })
        );
        console.log(messages);
      } else if (messages.status) {
        console.log(messages);
      } else {
        const { sender, hashcode, text, sent_at, is_read } = messages;
        console.log(e.data);
        setMessagesList((messages) => [...messages, { hashcode, sender, text, sent_at, is_read }]);
      }
    };

    if (websocket) {
      websocket.addEventListener("open", getMessages);
      websocket.addEventListener("message", showData);
      websocket.addEventListener("error", wsErrorHandler);
      websocket.addEventListener("close", wsReconnect);
    }

    return () => {
      if (websocket) {
        websocket.removeEventListener("open", getMessages);
        websocket.removeEventListener("message", showData);
        websocket.removeEventListener("error", wsErrorHandler);
        websocket.removeEventListener("close", wsReconnect);
        websocket.close();
      }
      if (timer) clearTimeout(timer);
    };
  }, [websocket]);

  useEffect(() => {
    console.log(role);
    if (role === "client" || role === "contractor")
      setWebsocket(new WebSocket(`wss://api.whywe.ru/ws/chat/${params.chatId}/`, getCookie("access_token")));
  }, [role]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [measuredForm.elementHeight, messagesList]);

  const { handleSubmit, resetField, control, watch } = useForm({
    defaultValues: {
      chat: "",
    },
  });

  const onSubmitHandler = (data: { chat: string }) => {
    const files = getFiles(filesPreview);

    const formFiles = new FormData();
    files.forEach((file) => formFiles.append(`file-${file.id}`, file.file));

    // TODO: СДЕЛАТЬ ОТПРАВКУ ФАЙЛОВ

    if (data.chat) websocket?.send(JSON.stringify({ command: "new_message", message: data.chat }));
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
        {messagesList.map((message, i, arr) => (
          <MessageItem
            key={message.hashcode}
            text={message.text}
            hashcode={message.hashcode}
            sent={dayjs(message.sent_at).format(dayjs().isSame(dayjs(message.sent_at), "day") ? "HH:mm" : "DD.MM.YYYY")}
            isRead={message.is_read}
            isMyMessage={email === message.sender}
            avaColor="red"
            markMessagesAsRead={(hash: string[]): boolean => {
              websocket?.send(JSON.stringify({ command: "read_messages", hashcodes: [hash.toString()] }));
              const tempArr = arr;
              if (!tempArr[i].is_read) {
                tempArr[i].is_read = true;
                setMessagesList(tempArr);
              }
              return true;
            }}
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
                    if (e.key === "Enter" && e.ctrlKey) handleSubmit(onSubmitHandler)();
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

            <Button className={styles.buttonSubmit} type="submit" disabled={!watch("chat")}>
              <Icon glyph="paper_airplane" />
            </Button>
          </WrapperForm>
        </form>
        {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}
      </div>
    </article>
  );
};
