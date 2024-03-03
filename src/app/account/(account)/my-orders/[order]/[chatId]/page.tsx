"use client";

import { Dialog, OrderInfo } from "@src/components/account/dialog";
import { myOffers } from "@src/shared/data/performer-account";

type OrderItemPageProps = {
  params: {
    chatId: string;
  };
};

export default function OrderItemPage({ params }: OrderItemPageProps) {
  const alias = params.chatId;
  const idDialog = alias.split("-")[1];

  let myOffer = {} as OrderInfo;

  myOffers.forEach((item, i) => {
    if (Number(item.id) === Number(idDialog)) {
      myOffer = {
        customer: item.customer,
        name: item.name,
        termOfExecution: item.description.termOfExecution,
        price: item.description.price,
        index: i + 1,
      };
    }
  });

  return <Dialog orderInfo={myOffer} />;
}
