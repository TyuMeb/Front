"use client";

import React, { useCallback, useEffect, useState } from "react";
import { HeadBlock } from "@src/components/home/head-block/head-block";
import { About } from "@src/components/home/about/about";
import { HowWorks } from "@src/components/home/how-works/how-works";
import { Form } from "@src/components/home/form/form";
import { Examples } from "@src/components/home/examples/examples";
import { Advantages } from "@src/components/home/advantages/advantages";
import { CreateOrder } from "@src/components/home/create-order/create-order";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { setContentBlock } from "@src/redux/slices/header-slice";
import { createNotifyModal } from "@src/redux/slices/notify-modal-slice";

const HASH_KEY = "41632ca7458226825e7812f7500c33ced538de4a";

export default function HomePage() {
  const [, setCurrent] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [aboutRef, inViewAbout] = useInView({ threshold: 0.5, triggerOnce: false });
  const [howWorksStartRef, inViewStartHowWorks] = useInView({ threshold: 0.5, triggerOnce: false });
  const [howWorksEndRef, inViewEndHowWorks] = useInView({ threshold: 0.5, triggerOnce: false });
  const [formStartRef, inViewStartForm] = useInView({ threshold: 1, triggerOnce: false });
  const [formEndRef, inViewEndForm] = useInView({ threshold: 1, triggerOnce: false });
  const [examplesRef, inViewExamples] = useInView({ threshold: 1, triggerOnce: false });
  const [advantagesRef, inViewAdvantages] = useInView({ threshold: 0.5, triggerOnce: false });
  const [createOrderRef, inViewCreateOrder] = useInView({ threshold: 0.5, triggerOnce: false });
  //чтобы класс active срабатывал только после скролла
  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);

  const authorizing = useAppSelector((store) => store.user.authorizing);

  useEffect(() => {
    if (authorizing) {
      return;
    }

    if (sessionStorage.getItem("KEY")) {
      return;
    }

    sessionStorage.setItem("KEY", HASH_KEY);
    dispatch(
      createNotifyModal({
        name: "cookies",
        delay: false,
      })
    );
  }, [authorizing]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (inViewAbout && scroll !== 0) {
      setCurrent("about");
      dispatch(setContentBlock("about"));
    } else if (inViewStartHowWorks || (inViewEndHowWorks && !inViewEndForm)) {
      setCurrent("howWorks");
      dispatch(setContentBlock("howWorks"));
    } else if (inViewStartForm) {
      setCurrent("form");
      dispatch(setContentBlock("form"));
    } else if (inViewExamples) {
      setCurrent("examples");
      dispatch(setContentBlock("examples"));
    } else if (inViewAdvantages) {
      setCurrent("advantages");
      dispatch(setContentBlock("advantages"));
    } else if (inViewCreateOrder) {
      setCurrent("createOrder");
      dispatch(setContentBlock("createOrder"));
    }
  }, [
    inViewAbout,
    inViewStartHowWorks,
    inViewEndHowWorks,
    inViewStartForm,
    inViewEndForm,
    inViewExamples,
    inViewAdvantages,
    inViewCreateOrder,
    dispatch,
    scroll,
  ]);

  return (
    <div className="homePage">
      <HeadBlock />
      <div className="container">
        <div ref={aboutRef} />
        <About />
        <div ref={howWorksStartRef} />
        <HowWorks />
        <div ref={howWorksEndRef} />
        <div ref={formStartRef} />
        <Form />
        <div ref={formEndRef} />
        <div ref={examplesRef} />
        <Examples />
        <div ref={advantagesRef} />
        <Advantages />
        <div ref={createOrderRef} />
        <CreateOrder />
      </div>
    </div>
  );
}
