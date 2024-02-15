"use client";

import { useCallback, useEffect, useState } from "react";
import { HeadBlock } from "@src/domains/home/ui/home/head-block/head-block";
import { About } from "@src/domains/home/ui/home/about/about";
import { HowWorks } from "@src/domains/home/ui/home/how-works/how-works";
import { Form } from "@src/domains/home/ui/home/form/form";
import { Examples } from "@src/domains/home/ui/home/examples/examples";
import { Advantages } from "@src/domains/home/ui/home/advantages/advantages";
import { CreateOrder } from "@src/domains/home/ui/home/create-order/create-order";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "@src/redux/hooks";
import { setContentBlock } from "@src/redux/slices/header-slice";

export function HomePage() {
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
