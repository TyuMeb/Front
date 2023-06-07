"use client";

import { HeadBlock } from "./head-block/head-block";
import { About } from "./about/about";
import { HowWorks } from "./how-works/how-works";
import { Form } from "./form/form";
import { Examples } from "./examples/examples";
import { Advantages } from "./advantages/advantages";
import { CreateOrder } from "./create-order/create-order";

export const Home = () => {
    return (
        <>
            <HeadBlock />
            <div className="container">
                <About />
                <HowWorks />
                <Form />
                <Examples />
                <Advantages />
                <CreateOrder />
            </div>
        </>
    );
};

