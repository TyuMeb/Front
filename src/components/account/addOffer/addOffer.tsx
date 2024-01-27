"use client";

import React, { HTMLAttributes, useState } from "react";
import classNames from "classnames/bind";

import { Button } from "@src/shared/ui/button";
import { Card } from "@src/components/account/card";
import { ListItem } from "@src/components/account/card/list-item";

import styles from "./addOffer.module.scss";
import { customerOrders, CustomerOrdersItems } from "@src/shared/data/performer-account";
import { Slider } from "@src/components/account/slider";
import { useForm } from "react-hook-form";
import { Input } from "@src/shared/ui/inputs";
import { InputPreviewFiles, PreviewFiles, FilesPreview, WrapperForm } from "@src/components/account/wrapper-form";
import { Textarea } from "@src/shared/ui/inputs/textarea";
import Paperclip from "@public/icons/paperclip.svg";
import { Icon } from "@src/components/icon";

const cx = classNames.bind(styles);

type MyOfferProps = {
  alias: string;
} & HTMLAttributes<HTMLDivElement>;

const cardList = (offer: CustomerOrdersItems) => {
  return [
    {
      name: "Файл с ТЗ",
      files: offer.files,
    },
    {
      name: "Задача:",
      value: offer.description.task,
    },
  ];
};

export const AddOffer = ({ alias, ...props }: MyOfferProps) => {
  const [filesPreview, setFilesPreview] = useState<FilesPreview[] | []>([]);

  const { register, handleSubmit } = useForm({
    values: {
      budget: "",
      period: "",
      offer: "",
    },
  });

  const onSubmit = ({ budget, period, offer }: { budget: string; period: string; offer: string }) => {
    console.log(budget, period, offer);
  };

  const idOffer = alias.split("-")[1];

  const customerOrder = customerOrders.find((item) => Number(item.id) === Number(idOffer));

  const settingsInput = {
    settings: {
      maxSizeFile: 1000000,
      maxSizeImage: 100000,
      maxCountFiles: 6,
      multiple: true,
      accept: ".png, .jpg, .jpeg",
    },
    disabled: (maxCountFiles: number) => filesPreview.length >= maxCountFiles,
  };

  const renderOrder = (customerOrder: CustomerOrdersItems) => {
    return (
      <Card>
        <div className="wrapperHead">
          <div className={styles.wrapperTitle}>
            <span
              className={`${styles.statusIcon}
                                ${customerOrder.offerType === "processing" && styles.backgroundBrown}
                                ${customerOrder.offerType === "notReviewed" && styles.backgroundGreen}
                                ${customerOrder.offerType === "notSelected" && styles.backgroundPink}`}
            />
            <h2 className="subtitle2">{customerOrder.name}</h2>
          </div>

          <div className={styles.wrapperMenu}>
            <p className="text-small-semibold">Дата заказа:</p>
            &nbsp;
            <p className="text-small">{customerOrder.description.date}</p>
          </div>
        </div>

        <div className="wrapperList">
          <ul className="list">
            {cardList(customerOrder).map((item, i) => {
              return (
                <li key={i}>
                  <ListItem description={item} />
                </li>
              );
            })}
          </ul>

          {customerOrder.images?.length ? <Slider images={customerOrder.images} alt={customerOrder.name} /> : <></>}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs}>
            <Input label="Ваш бюджет" placeholder="------ р." required {...register("budget")} />
            <Input label="Ваши сроки" placeholder="------" required {...register("period")} />
          </div>

          <WrapperForm className={styles.wrapperForm}>
            <Textarea
              className={styles.textarea}
              placeholder="Здесь вы можете описать подробно ваше предложение"
              {...register("offer", {
                required: true,
              })}
            />

            <InputPreviewFiles
              disabled={settingsInput.disabled(settingsInput.settings.maxCountFiles)}
              {...settingsInput.settings}
              setFilesPreview={setFilesPreview}
            >
              <Paperclip
                className={cx({
                  disabled: filesPreview.length >= settingsInput.settings.maxCountFiles,
                })}
              />
            </InputPreviewFiles>

            <Button className={styles.buttonSubmit} type="submit">
              <Icon glyph="paper_airplane" />
            </Button>
          </WrapperForm>

          {filesPreview.length ? <PreviewFiles files={filesPreview} setFilesPreview={setFilesPreview} /> : <></>}

          <Button className={`text-small ${styles.button}`} onClick={() => {}}>
            Отправить предложение
          </Button>
        </form>
      </Card>
    );
  };

  return (
    customerOrder && (
      <section className={styles.wrapperCustomerOrders} {...props}>
        {renderOrder(customerOrder)}
      </section>
    )
  );
};
