"use client";

import { Home } from "@src/components/home";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@src/redux/hooks";
import { openModal } from "@src/redux/modal-slice";

export default function Page() {
    const dispatch = useAppDispatch();
    const params = useParams();
    dispatch(openModal());
    console.log(params);
    return <Home />;
}
