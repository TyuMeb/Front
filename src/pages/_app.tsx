import type { AppProps } from "next/app";
import AppLayout from "@src/components/app-layout/app-layout";
import "@src/app/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
};

export default MyApp;
