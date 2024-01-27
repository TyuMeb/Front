"use client";

import { AddOffer } from "@src/components/account/addOffer";

type AddOfferPageProps = {
  params: {
    addOffer: string;
  };
};

export default function AddOfferPage({ params }: AddOfferPageProps) {
  return <AddOffer alias={params.addOffer} />;
}
