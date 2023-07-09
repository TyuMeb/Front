"use client";

import { Open_Sans, Raleway } from "next/font/google";

import styles from "./page.module.scss";

import { HeadBlock } from "@src/components/home/head-block/head-block";
import { About } from "@src/components/home/about/about";
import { HowWorks } from "@src/components/home/how-works/how-works";
import { Form } from "@src/components/home/form/form";
import { Examples } from "@src/components/home/examples/examples";
import { Advantages } from "@src/components/home/advantages/advantages";
import { CreateOrder } from "@src/components/home/create-order/create-order";

const openSans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function HomePage() {
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
}
