"use client";

import React, { useEffect } from "react";
import { Home } from "@src/components/home";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/slices/modal-slice";
import { HomeLayout } from "@src/components/layouts/home-layout";

export default function Page() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openModal());
    dispatch(setTypeModal("resetPasswordConfirm"));
  }, []);

  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
