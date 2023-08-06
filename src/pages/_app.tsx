import type { AppProps } from "next/app";
import "@src/app/global.css";
import AppLayout from "@src/components/app-layout/app-layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
};

export default MyApp;
