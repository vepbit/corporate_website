import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

import Breadcrumbs from "./../parts/Breadcrumbs";


const LayoutBreadcrumbs = ({ children, title, description, pageTitle, og }) => {
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
                <meta property="og:title" content={og.title ? og.title : ''} />
                <meta property="og:description" content={og.desc ? og.desc : ''} />
                <meta property="og:image" content={og.img ? og.img : ''} />
                <meta property="og:url" content={og.url ? og.url : ''} />
            </Head>
            <Header />
            <Breadcrumbs title={pageTitle} />
            <h1 className="page-title 1" >{pageTitle}</h1>
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default LayoutBreadcrumbs;