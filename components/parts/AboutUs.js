

const AboutUs = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row about-us" >
                        <div className="col-12 col-sm-6">
                            <h2 className="about-us__title">About us</h2>
                            <p className="about-us__desc">We are a young team consisting of a creative designer, frontend/backend developers and a manager. We have implemented more than 145 successful projects. For 7 years of work we helped our clients to improve their business and give it a new direction. We approach each project with individual solutions and great responsibility. The result of our joint work is the realization of your goals and ambitions on the Internet.

                            </p>
                            <div className="about-us__numbers d-none d-lg-block">
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-lg-none">
                            <div className="about-us__numbers">
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                                <div className="about-us__number about-us-number">
                                    <p className="about-us-number__title">happy clients</p>
                                    <p className="about-us-number__number">348+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <img src="/about-us.png" alt="" className="about-us__img" width="330" height="460" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs;