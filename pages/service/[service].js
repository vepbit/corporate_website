import { useRouter } from 'next/router'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import LayoutBreadcrumbs from "../../components/layout/LayoutBreadcrumbs";

export default function Index({ services, og }) {

  const router = useRouter();
  const service_id = router.query.service;
  return (
    services.map((service, index) => {

      if (service.id === service_id) {
        return (
          <LayoutBreadcrumbs
            pageTitle={service.preview_title}
            og={og}
          >
            <div className="wrapper-project" >
              <div className="container">
                <div className="row" >
                  <div className="col-12" >
                    <div className="service-single" dangerouslySetInnerHTML={{ __html: service.service_details_html }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style  >{service.service_details_css}</style>
          </LayoutBreadcrumbs>
        )
      }
    }
    )

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
        query {
            ourServices{
                id
                preview_title
                preview_desc
                preview_image{
                url
                }
                service_details_html
                service_details_css
                og_title
                og_desc
                og_image
                og_url
            },
        }`
  });
  //console.log(data);

  return {
    props: {
      services: data.ourServices,
      og: { "title": data.ourServices.og_title ? data.ourServices.og_title : '', "desc": data.ourServices.og_desc ? data.ourServices.og_desc : '', "img": data.ourServices.og_image ? data.ourServices.og_image : '', "url": data.ourServices.og_url ? data.ourServices.og_url : '' }
    }
  }
}
