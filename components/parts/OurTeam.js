const OurTeam = ({ teams }) => {
    return (
        <>
            <section className="our-team section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-4 ">
                            <h2 className="section-title">our great <br className="d-none d-sm-block" /> team</h2>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-7 offset-lg-1">
                            <p className="our-team__desc">We able to work together toward a shared vision. The ability to direct individual achievement toward organizational goals. It is a resource that enables people to achieve extraordinary results.
                            </p>
                        </div>
                        {
                            teams.map((item, index) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4" key={index}>
                                        <div className="our-team-member">
                                            <img src={item.image.url} alt="" className="our-team-member__img" />
                                            <div className="our-team-member__content">
                                                <p className="our-team-member__name">{item.name}</p>
                                                <p className="our-team-member__departament">{item.position}</p>
                                                <p className="our-team-member__desc">{item.description}</p>
                                                <div className="our-team-member__social-links">

                                                    {item.telegram != null && item.telegram != ""
                                                        ?
                                                        <a href={item.telegram} className="our-team-member__social-link telegram"></a>
                                                        :
                                                        ''
                                                    }
                                                    {item.instagram != null && item.instagram != ""
                                                        ?
                                                        <a href={item.instagram} className="our-team-member__social-link instagram"></a>
                                                        :
                                                        ''
                                                    }
                                                    {item.facebook != null && item.facebook != ""
                                                        ?
                                                        <a href={item.facebook} className="our-team-member__social-link facebook"></a>
                                                        :
                                                        ''
                                                    }
                                                    {item.github != null && item.github != ""
                                                        ?
                                                        <a href={item.github} className="our-team-member__social-link github"></a>
                                                        :
                                                        ''
                                                    }
                                                    {item.bitbucket != null && item.bitbucket != ""
                                                        ?
                                                        <a href={item.bitbucket} className="our-team-member__social-link bitbucket"></a>
                                                        :
                                                        ''
                                                    }
                                                    {item.linkedin != null && item.linkedin != ""
                                                        ?
                                                        <a href={item.linkedin} className="our-team-member__social-link linkedin"></a>
                                                        :
                                                        ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurTeam;