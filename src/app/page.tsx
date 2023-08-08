"use client";
import "./global.css";
import React, { useCallback, useEffect, useState } from "react";
import { HeadBlock } from "@src/components/home/head-block/head-block";
import { About } from "@src/components/home/about/about";
import { HowWorks } from "@src/components/home/how-works/how-works";
import { Form } from "@src/components/home/form/form";
import { Examples } from "@src/components/home/examples/examples";
import { Advantages } from "@src/components/home/advantages/advantages";
import { CreateOrder } from "@src/components/home/create-order/create-order";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "@src/redux/hooks";
import { setContentBlock } from "@src/redux/header-slice";

export default function HomePage() {
    const [current, setCurrent] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const [aboutRef, inViewAbout] = useInView({ threshold: 0.5, triggerOnce: false });
    const [howWorksRef, inViewHowWorks] = useInView({ threshold: 0.5, triggerOnce: false });
    const [formRef, inViewForm] = useInView({ threshold: 0.5, triggerOnce: false });
    const [examplesRef, inViewExamples] = useInView({ threshold: 0.5, triggerOnce: false });
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
        } else if (inViewHowWorks) {
            setCurrent("howWorks");
            dispatch(setContentBlock("howWorks"));
        } else if (inViewForm) {
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
        inViewHowWorks,
        inViewForm,
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
                <div ref={howWorksRef} />
                <HowWorks />
                <div ref={formRef} />
                <Form />
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
