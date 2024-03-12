"use client";

import { useEffect } from "react";
import { Home } from "@src/components/home";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal, setTypeModal } from "@src/redux/slices/modal-slice";

export default function Page() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(openModal());
    dispatch(setTypeModal("resetPassword"));
  }, []);

  return <Home />;
}
