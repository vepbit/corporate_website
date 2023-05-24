import React, { useState } from 'react';

const Testimonials = ({ testimonials }) => {

    const [activeClass, setActiveClass] = useState(0);
    const [testimonialsQuantity, setTestimonialsQuantity] = useState(testimonials.length);

    function changeActiveTestimonials(event) {

        if (event === 'increase') {
            if (testimonialsQuantity === (activeClass + 1)) {
                setActiveClass(0);
            } else {
                setActiveClass(activeClass + 1)
            }
        } else if (event === 'decrease') {
            if (activeClass === 0) {
                setActiveClass(testimonialsQuantity - 1);
            } else {
                setActiveClass(activeClass - 1)
            }
        }

    }
    return (
        <>
            <section className="testimonials section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonials-lilandre">
                                <div className="testimonials-lilandre__outer">
                                    {
                                        testimonials.map((item, index) => {
                                            return (
                                                <div className={"testimonials-lilandre__item testimonial-lilandre-item " + (index === activeClass ? 'show' : '')} key={index} >
                                                    <img src="/testimonial.webp" alt="" className="testimonial-lilandre-item__img" width="60" height="61" />
                                                    <p className="testimonial-lilandre-item__name">{item.name}</p>
                                                    <p className="testimonial-lilandre-item__role">{item.position}</p>
                                                    <p className="testimonial-lilandre-item__desc">{item.comment}</p>
                                                    <div className="testimonial-lilandre-item__filter">

                                                    </div>
                                                    <div className="testimonial-lilandre-item__background">

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="testimonials-lilandre__nav testimonials-nav">
                                    <input type="button" className="testimonials-nav__left" onClick={() => {
                                        changeActiveTestimonials('decrease')
                                    }} />
                                    <input type="button" className="testimonials-nav__right" onClick={() => {
                                        changeActiveTestimonials('increase')
                                    }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;