"use client";

import { Dialog, OrderInfo } from "@src/components/account/dialog";
import { performers } from "@src/shared/data/customer-account";

type OrderItemPageProps = {
    params: {
        performers: string;
    };
};

export default function OrderItemPage({ params }: OrderItemPageProps) {
    const alias = params.performers;
    const idDialog = alias.split("-")[1];

    let performer = {} as OrderInfo;

    performers.forEach((item, i) => {
        if (Number(item.id) === Number(idDialog)) {
            performer = {
                name: item.name,
                termOfExecution: item.termOfExecution,
                price: item.price,
                index: i + 1,
            };
        }
    });

    return <Dialog orderInfo={performer} />;
}
