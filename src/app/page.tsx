"use client";

import { Open_Sans, Raleway } from "next/font/google";

import styles from "./page.module.scss";

import { HeadBlock } from "@/components/home/head-block/head-block";
import { About } from "@/components/home/about/about";
import { HowWorks } from "@/components/home/how-works/how-works";
import { Form } from "@/components/home/form/form";
import { Examples } from "@/components/home/examples/examples";
import { Advantages } from "@/components/home/advantages/advantages";
import { CreateOrder } from "@/components/home/create-order/create-order";

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

