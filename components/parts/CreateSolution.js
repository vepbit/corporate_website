import Link from 'next/link';

const CreateSolution = () => {
    return (
        <>
            <section className="create-solution section section__top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 order-lg order-lg__text">
                            <div className="video-solution-text">
                                <h1 className="video-solution-text__title">
                                    We are creating solutions
                                </h1>
                            </div>
                            <div className="video-solution-button d-none d-lg-block">
                                <Link href="/contact">
                                    <a className="contact-us-button"  >Contact us</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-lg order-lg__video">
                            <div className="video-company">
                                <video controls >
                                    <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                                    <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-12 d-lg-none">
                            <div className="video-solution-button">
                                <Link href="/contact">
                                    <a className="contact-us-button" >Contact us</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row video-solution-steps-inner">
                        <div className="col-4">
                            <div className="video-solution-steps">
                                <span className="video-solution-steps__number" >01</span>
                                <span className="video-solution-steps__line" ></span>
                                <span className="video-solution-steps__name" >imagine</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="video-solution-steps">
                                <span className="video-solution-steps__number" >02</span>
                                <span className="video-solution-steps__line" ></span>
                                <span className="video-solution-steps__name" >discuss</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="video-solution-steps">
                                <span className="video-solution-steps__number" >03</span>
                                <span className="video-solution-steps__line" ></span>
                                <span className="video-solution-steps__name" >develop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CreateSolution;