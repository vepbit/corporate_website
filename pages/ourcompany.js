import LayoutFormBreadcrumbs from "../components/layout/LayoutFormBreadcrumbs";

import AboutUs from "../components/parts/AboutUs";

import Testimonials from "../components/parts/Testimonials"

import OurTeam from '../components/parts/OurTeam';


import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import gql from "graphql-tag";

import { useRouter } from 'next/router'


const OurCompany = ({ ourteam, testimonials, title, meta_desctiption, team_visiability, og }) => {

  const router = useRouter();
  // console.log(router);

  og.url = router.pathname;



  return (
    <LayoutFormBreadcrumbs
      pageTitle='Our company'
      title={title}
      description={meta_desctiption}
      og={og}
    >
      <AboutUs />
      {team_visiability === 'yes' ?
        <OurTeam teams={ourteam} />
        : ''
      }
      <Testimonials testimonials={testimonials} />
    </LayoutFormBreadcrumbs>
  )
}


export async function getStaticProps() {

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
            testimonials{
                name
                position
                comment
                image{
                formats
                }
            },
            ourTeams{
                name
                position
                description
                image{
                    url
                }
                telegram
                instagram
                facebook
                bitbicket
                github
                linkedin
            }
            ourCompanyPage{
              meta_tag_description
              page_title
              team_visiability
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
      testimonials: data.testimonials,
      ourteam: data.ourTeams,
      title: data.ourCompanyPage.page_title,
      meta_desctiption: data.ourCompanyPage.meta_tag_description,
      team_visiability: data.ourCompanyPage.team_visiability,
      og: { "title": data.ourCompanyPage.og_title ? data.ourCompanyPage.og_title : '', "desc": data.ourCompanyPage.og_desc ? data.ourCompanyPage.og_desc : '', "img": data.ourCompanyPage.og_image ? data.ourCompanyPage.og_image : '', "url": data.ourCompanyPage.og_url ? data.ourCompanyPage.og_url : '' }
    }
  }
}

export default OurCompany;