import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import gql from "graphql-tag";

import React, { useEffect } from 'react';

import LayoutFormBreadcrumbs from "../components/layout/LayoutFormBreadcrumbs";

import PortfolioProject from "../components/parts/PortfolioProject"

import { useRouter } from 'next/router'

const Projects = ({ projects, title, meta_desctiption, filter_visiability, og }) => {

    // console.log(projects);

    const router = useRouter();
    // console.log(router);

    og.url = router.pathname;

    return (
        <LayoutFormBreadcrumbs
            pageTitle='Our portfolio'
            title={title}
            description={meta_desctiption}
            og={og}
        >
            <section className="full-portfolio section">
                <div className="container full-portfolio__list">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                {filter_visiability === 'yes' ?
                                    <div className="col-12">
                                        <div className="full-portfolio-control__inner">
                                            <div className="full-portfolio-control">
                                                <a href="#" className="full-portfolio-control__open-filter" id="filter-opener">Filters</a>
                                                <ul className="full-portfolio-control__list hide">
                                                    <li className="full-portfolio-control__item ">
                                                        <a href="" className="full-portfolio-control__link">Tags</a>

                                                        <div className="full-portfolio-control-popup active">
                                                            <ul className="full-portfolio-control-popup__list">
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                                <li className="full-portfolio-control-popup__item">
                                                                    <a href="#" className="full-portfolio-control-popup__link">Web-design</a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </li>
                                                    <li className="full-portfolio-control__item">
                                                        <a href="" className="full-portfolio-control__link">Technology</a>
                                                    </li>
                                                    <li className="full-portfolio-control__item">
                                                        <a href="" className="full-portfolio-control__link">Project type</a>
                                                    </li>
                                                    <li className="full-portfolio-control__item">
                                                        <a href="" className="full-portfolio-control__link">Project catagory</a>
                                                    </li>
                                                </ul>
                                                <a href="" className="full-portfolio-control__clear hide">Clear all</a>

                                            </div>
                                        </div>

                                    </div>
                                    : ''}

                                {
                                    projects.map((item, index) => {
                                        return (
                                            <PortfolioProject data={item} />
                                        )
                                    })
                                }

                                <div className="see-more-inner">
                                    <a href="#" className="see-more">See more</a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </LayoutFormBreadcrumbs>

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
            ourProjects {
                id
                projects_page_image{
                    url
                }
                projects_page_desc
                projects_page_title
                projects_page_list
            },
            portfolioPage{
              meta_tag_description
              page_title
              filter_visiability
              og_title
              og_desc
              og_image
              og_url
            }
        }
  
      `
    });

    return {
        props: {
            data: data,
            projects: data.ourProjects,
            title: data.portfolioPage.page_title,
            meta_desctiption: data.portfolioPage.meta_tag_description,
            filter_visiability: data.portfolioPage.filter_visiability,
            og: { "title": data.portfolioPage.og_title ? data.portfolioPage.og_title : '', "desc": data.portfolioPage.og_desc ? data.portfolioPage.og_desc : '', "img": data.portfolioPage.og_image ? data.portfolioPage.og_image : '', "url": data.portfolioPage.og_url ? data.portfolioPage.og_url : '' }
        }
    }
}

export default Projects;