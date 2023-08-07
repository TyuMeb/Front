"use client";
import "./global.css";
import React, { useEffect, useState } from "react";
import { HeadBlock } from "@src/components/home/head-block/head-block";
import { About } from "@src/components/home/about/about";
import HowWorks from "@src/components/home/how-works/how-works";
import Form from "@src/components/home/form/form";
import Examples from "@src/components/home/examples/examples";
import Advantages from "@src/components/home/advantages/advantages";
import CreateOrder from "@src/components/home/create-order/create-order";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
    const [current, setCurrent] = useState<string>("about");
    const [aboutRef, inViewAbout] = useInView({ threshold: 0.5, triggerOnce: true });
    const [howWorksRef, inViewHowWorks] = useInView({ threshold: 0.5, triggerOnce: true });
    const [formRef, inViewForm] = useInView({ threshold: 0.5, triggerOnce: true });
    const [examplesRef, inViewExamples] = useInView({ threshold: 0.5, triggerOnce: true });
    const [advantagesRef, inViewAdvantages] = useInView({ threshold: 0.5, triggerOnce: true });
    const [createOrderRef, inViewCreateOrder] = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inViewAbout) {
            console.log("about");
            /*    setCurrent("about"); */
        } else if (inViewHowWorks) {
            console.log("howWorks");
            /*   setCurrent("howWorks"); */
        } else if (inViewForm) {
            console.log("form");
            /*     setCurrent("form"); */
        } else if (inViewExamples) {
            console.log("examples");
            /*      setCurrent("examples"); */
        } else if (inViewAdvantages) {
            console.log("advantages");
            /*  setCurrent("advantages"); */
        } else if (inViewCreateOrder) {
            console.log("createOrder");
            /*        setCurrent("createOrder"); */
        }
    }, [inViewAbout, inViewHowWorks, inViewForm, inViewExamples, inViewAdvantages, inViewCreateOrder]);

    return (
        <div className="homePage">
            <HeadBlock />
            <div className="container">
                <About ref={aboutRef} />
                <HowWorks ref={howWorksRef} />
                <Form ref={formRef} />
                <Examples ref={examplesRef} />
                <Advantages ref={advantagesRef} />
                <CreateOrder ref={createOrderRef} />
            </div>
        </div>
    );
}
