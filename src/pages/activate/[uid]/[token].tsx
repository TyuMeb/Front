import HomePage from "@src/pages/index";
import { useRouter } from "next/router";

export default function HomePag() {
    const router = useRouter();
    console.log(router.query);

    return (
        <>
            <HomePage />
        </>
    );
}
