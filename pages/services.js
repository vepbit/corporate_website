import LayoutFormBreadcrumbs from "../components/layout/LayoutFormBreadcrumbs";

import Service from "../components/parts/Service";


import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import gql from "graphql-tag";

import { useRouter } from 'next/router'

const Services = ({ data, services, title, meta_desctiption, og }) => {
    // console.log(data);

    // console.log(services);

    const router = useRouter();
    console.log(router);

    og.url = router.pathname;


    return (
        <>
            <LayoutFormBreadcrumbs
                pageTitle='Services'
                title={title}
                description={meta_desctiption}
                og={og}
            >
                <section className="our-service">
                    <div className="container our-service__services">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    {
                                        services.map((item, index) => {
                                            return (
                                                <Service data={item} key={index} />
                                            )
                                        })
                                    }
                                </div>
                            </div>



                        </div>
                    </div>
                </section>
            </LayoutFormBreadcrumbs>
        </>

    )
}

export async function getServerSideProps() {

    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: `${process.env.GRAPHQLSERVER}`
    });
    const client = new ApolloClient({
        cache,
        link
    });

    const { data } = await client.query({
        query: gql`
        query{
            ourServices{
                id
                preview_title
                preview_desc
                preview_image{
                    url
                }
            }
            servicesPage{
              meta_tag_description
              page_title
              og_title
              og_desc
              og_image
              og_url
            }
        }`
    });

    return {
        props: {
            data: data,
            services: data.ourServices,
            title: data.servicesPage.page_title,
            meta_desctiption: data.servicesPage.meta_tag_description,
            og: { "title": data.servicesPage.og_title ? data.servicesPage.og_title : '', "desc": data.servicesPage.og_desc ? data.servicesPage.og_desc : '', "img": data.servicesPage.og_image ? data.servicesPage.og_image : '', "url": data.servicesPage.og_url ? data.servicesPage.og_url : '' }
        }
    }
}
export default Services;