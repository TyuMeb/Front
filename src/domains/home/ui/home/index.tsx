import { HeadBlock } from "@src/domains/home/ui/home/head-block/head-block";
import { About } from "@src/domains/home/ui/home/about/about";
import { HowWorks } from "@src/domains/home/ui/home/how-works/how-works";
import { Form } from "@src/domains/home/ui/home/form/form";
import { Examples } from "@src/domains/home/ui/home/examples/examples";
import { Advantages } from "@src/domains/home/ui/home/advantages/advantages";
import { CreateOrder } from "@src/domains/home/ui/home/create-order/create-order";

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
