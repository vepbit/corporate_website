import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>
                    {title
                        ? title
                        : "Vepbit - your way to the future."}
                </title>
                <meta
                    name="description"
                    key="description"
                    content={
                        description
                            ? description
                            : "This is a Template using Next.js and Material-UI with Header and Footer."
                    }
                />
                <body data-color-mode="white" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;