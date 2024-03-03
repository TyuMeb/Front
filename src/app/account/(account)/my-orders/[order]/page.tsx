"use client";

import { useParams } from "next/navigation";

// TODO: ДОБАВИТЬ ВЁРСТКУ СТРАНИЦЫ ПРЕДЛОЖЕНИЯ

export default function OfferItem() {
  const params = useParams();

  return <div>ПРЕДЛОЖЕНИЯ ДЛЯ ЗАКАЗА {params.order}</div>;
}
