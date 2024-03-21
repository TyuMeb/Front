"use client";

import { AddOffer } from "@src/components/account/add-offer";

type AddOfferPageProps = {
  params: {
    addOffer: string;
  };
};

export default function AddOfferPage({ params }: AddOfferPageProps) {
  return <AddOffer alias={params.addOffer} />;
}
