const SocialLinks = ({ social_links }) => {
    return (
        <section className="section-social-links">
            <div className="container">
                <div className="row section-social-links__inner">
                    {social_links.telegram != null && social_links.telegram != ""
                        ?
                        <div className="col-3 col-md-3">
                            <div className="social-link">
                                <a href={social_links.telegram} className="social-link__link">
                                    <img src="/social-links/telegram.svg" alt="" className="social-link__img" />
                                </a>
                                <div className="social-link__filter"></div>
                                <div className="social-link__background"></div>
                                <div className="social-link__filter-dark"></div>

                            </div>
                        </div>
                        :
                        ''
                    }
                    {social_links.instagram != null && social_links.instagram != ""
                        ?
                        <div className="col-3 col-md-3">
                            <div className="social-link">
                                <a href={social_links.instagram} className="social-link__link">
                                    <img src="/social-links/instagram.svg" alt="" className="social-link__img" />
                                </a>
                                <div className="social-link__filter"></div>
                                <div className="social-link__background"></div>
                                <div className="social-link__filter-dark"></div>

                            </div>
                        </div>
                        :
                        ''
                    }
                    {social_links.facebook != null && social_links.facebook != ""
                        ?
                        <div className="col-3 col-md-3">
                            <div className="social-link">
                                <a href={social_links.facebook} className="social-link__link">
                                    <img src="/social-links/facebook.svg" alt="" className="social-link__img" />
                                </a>
                                <div className="social-link__filter"></div>
                                <div className="social-link__background"></div>
                                <div className="social-link__filter-dark"></div>

                            </div>
                        </div>
                        :
                        ''
                    }
                    {social_links.whatsapp != null && social_links.whatsapp != ""
                        ?
                        <div className="col-3 col-md-3">
                            <div className="social-link">
                                <a href={social_links.whatsapp} className="social-link__link">
                                    <img src="/social-links/whatsapp.svg" alt="" className="social-link__img" />
                                </a>
                                <div className="social-link__filter"></div>
                                <div className="social-link__background"></div>
                                <div className="social-link__filter-dark"></div>

                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        </section>
    )
}
export default SocialLinks;

