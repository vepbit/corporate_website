import React from 'react';
import Link from 'next/link';

import Project from './Project';


export default function OurWorkMain({ projects }) {

    return (
        <>
            <section className="our-work section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-9 col-xl-8 col-xxl-10 ">
                            <h2 className="section-title">we work with over 30 top-tier brands and industry leaders</h2>
                        </div>
                        <div className="our-work__items">

                            {
                                projects.slice(0, 3).map((item, index) => {
                                    return (
                                        <Project data={item} index={index} key={index} />
                                    )
                                })
                            }


                        </div>
                        <div className="see-more-inner">
                            <Link href="/projects">
                                <a className="see-more" on>See more</a>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}