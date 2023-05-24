import Link from 'next/link';

const WhyWe = ()=>{
    return(
        <>
        <section className="why-we section">
        <div className="container">
          
                <div className="why-we__best-choise row">
                    <div className="col-12 col-sm-6 col-lg-5 offset-lg-1">
                        <h2 className="why-we__title">we are your <br className="d-none d-sm-block" /> best choice</h2>
                        <p className="why-we__desc">
                            Devoting to the work of the client-manager strategy, we report maximum efforts, in order for your new website to be a successful and profitable marketing solution.
                        </p>
                        <div className="contact-us-button-colorful-inner d-none d-sm-block">
                            <Link href="/contact">
                                <a className="contact-us-button-colorful">Contact us</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src="/why-we.webp" width="460" height="470" alt="" className="why-we__img" />
                    </div>
                </div>
                
                <div className="contact-us-button-colorful-inner  d-sm-none">
                    <Link href="/contact">
                        <a className="contact-us-button-colorful">Contact us</a>
                    </Link>
                </div>
                <div className="why-we__result-goal row">
                    <div className="col-12 col-sm-6">
                        <img src="/why-we.webp" width="460" height="470" alt="" className="why-we__img" />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-5">
                        <h2 className="why-we__title">The result is <br className="d-none d-sm-block" /> our goal</h2>
                        <p className="why-we__desc">
                            Our experience includes the implementation of development, design, optimization, implementation and integration projects in various fields.
                        </p>
                        <div className="contact-us-button-colorful-inner d-none d-sm-block">
                            <Link href="/contact">
                                <a className="contact-us-button-colorful">Contact us</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="contact-us-button-colorful-inner  d-sm-none">
                    <Link href="/contact">
                        <a className="contact-us-button-colorful">Contact us</a>
                    </Link>
                </div>
        </div>
    </section>        </>
    )
}
export default WhyWe;