import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutForm from "../components/layout/LayoutForm";

import CreateSolution from '../components/parts/CreateSolution';
import WhyWe from '../components/parts/WhyWe';

import Service from "../components/parts/Service";

import OurWorkMain from "../components/parts/OurWorkMain"

import Testimonials from "../components/parts/Testimonials"

import OurTeam from '../components/parts/OurTeam';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import gql from "graphql-tag";

import { useRouter } from 'next/router'

export default function Home({ data, services, testimonials, ourteam, projects, title, meta_desctiption, team_visiability, og }) {

    const router = useRouter();
    og.url = router.pathname;
    const [ativeTheme, setAtiveTheme] = useState('');

    useEffect(() => {
        if (localStorage.getItem('theme-style') === null) {
            localStorage.setItem('theme-style', 'white');
        }
        if (localStorage.getItem('theme-style') === 'white') {
            setAtiveTheme('white');
        } else {
            setAtiveTheme('dark');
        }
    });

    return (
        <LayoutForm theme={ativeTheme}
            description={meta_desctiption}
            title={title}
            og={og}
        >

            <CreateSolution />
            {team_visiability === 'yes' ?
                <OurTeam teams={ourteam} />
                : ''
            }
            <WhyWe />


            <section className="our-service section">
                <div className="container our-service__services">
                    <div className="row">
                        <div className="col-sm-12 col-md-9 col-xl-8 col-xxl-10 ">
                            <h2 className="section-title">we know that you are special, then we serve you with special too</h2>
                        </div>
                        <div className="service-navigation">
                            <div className="service-navigation__left"></div>
                            <div className="service-navigation__right"></div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                {
                                    services.slice(0, 4).map((item, index) => {
                                        return (
                                            <Service data={item} />
                                        )
                                    })
                                }

                            </div>
                        </div>

                        <div className="see-more-inner">
                            <Link href="/services">
                                <a className="see-more">See more</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>



            <OurWorkMain projects={projects} />
            <Testimonials testimonials={testimonials} />

        </LayoutForm>
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
            },
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
            },
            ourProjects {
                id
                main_page_desc
                main_page_image_list
                main_page_image_big {
                    url
                }
                main_page_image_small {
                    url
                }
            },
            homePage{
                page_title
                meta_tag_description
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
            services: data.ourServices,
            testimonials: data.testimonials,
            ourteam: data.ourTeams,
            projects: data.ourProjects,
            title: data.homePage.page_title,
            meta_desctiption: data.homePage.meta_tag_description,
            team_visiability: data.homePage.team_visiability,
            og: { "title": data.homePage.og_title ? data.homePage.og_title : '', "desc": data.homePage.og_desc ? data.homePage.og_desc : '', "img": data.homePage.og_image ? data.homePage.og_image : '', "url": data.homePage.og_url ? data.homePage.og_url : '' }
        }
    }
}
