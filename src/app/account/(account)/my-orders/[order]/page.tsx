"use client";

import { Dialog, OrderInfo } from "@src/components/account/dialog";
import { myOffers } from "@src/shared/data/performer-account";
import { useParams } from "next/navigation";

// type OrderItemPageProps = {
//   params: {
//     order: string;
//   };
// };

export default function OfferItem() {
  const params = useParams();

  return <div>ПРЕДЛОЖЕНИЯ ДЛЯ ЗАКАЗА {params.order}</div>;
}
