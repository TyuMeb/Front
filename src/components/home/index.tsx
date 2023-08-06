import { HeadBlock } from "@src/components/home/head-block/head-block";
import { About } from "@src/components/home/about/about";
import { HowWorks } from "@src/components/home/how-works/how-works";
import { Form } from "@src/components/home/form/form";
import { Examples } from "@src/components/home/examples/examples";
import { Advantages } from "@src/components/home/advantages/advantages";
import { CreateOrder } from "@src/components/home/create-order/create-order";

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
