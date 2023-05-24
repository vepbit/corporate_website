const ContactCards = ({ contact_details }) => {
    return (
        <section className="section-contact-list">
            <div className="container">
                <div className="row">
                    {contact_details.telephone != null && contact_details.telephone != ""
                        ?
                        <div className="col-6 col-md-3">
                            <a href={"tel:" + contact_details.telephone} className="contact-item">
                                <div className="contact-item__img-inner">
                                    <img src="/phone.svg" alt="" className="contact-item__img" width="64" height="64" />
                                    <div className="contact-item__details">
                                        <h3 className="contact-item__title">Mobile Phone</h3>
                                        <span href={"tel:" + contact_details.telephone} className="contact-item__data">{contact_details.telephone}</span>
                                    </div>
                                </div>
                                <div className="contact-item__background">
                                </div>
                                <div className="contact-item__filter">
                                </div>
                                <div className="contact-item__filter-dark">
                                </div>
                            </a>
                        </div>
                        :
                        ''
                    }
                    {contact_details.email != null && contact_details.email != ""
                        ?
                        <div className="col-6 col-md-3">
                            <a href={"mailto:" + contact_details.email} className="contact-item">
                                <div className="contact-item__img-inner">
                                    <img src="/email.svg" alt="" className="contact-item__img" width="64" height="64" />
                                    <div className="contact-item__details">
                                        <h3 className="contact-item__title">email</h3>
                                        <a href={"mailto:" + contact_details.email} className="contact-item__data">{contact_details.email}</a>
                                    </div>
                                </div>
                                <div className="contact-item__background">
                                </div>
                                <div className="contact-item__filter">
                                </div>
                                <div className="contact-item__filter-dark">
                                </div>
                            </a>
                        </div>
                        :
                        ''
                    }
                    {contact_details.location != null && contact_details.location != ""
                        ?
                        <div className="col-6 col-md-3">
                            <a href="#" className="contact-item">
                                <div className="contact-item__img-inner">
                                    <img src="/location.svg" alt="" className="contact-item__img" width="64" height="64" />
                                    <div className="contact-item__details">
                                        <h3 className="contact-item__title">Location</h3>
                                        <a href="#" className="contact-item__data">{contact_details.location}</a>
                                    </div>
                                </div>
                                <div className="contact-item__background">
                                </div>
                                <div className="contact-item__filter">
                                </div>
                                <div className="contact-item__filter-dark">
                                </div>
                            </a>
                        </div>
                        :
                        ''
                    }
                    {contact_details.freelancer != null && contact_details.freelancer != ""
                        ?
                        <div className="col-6 col-md-3">
                            <a href={contact_details.freelancer} className="contact-item">
                                <div className="contact-item__img-inner">
                                    <img src="/freelancer-1 1.svg" alt="" className="contact-item__img" width="64" height="64" />
                                    <div className="contact-item__details">
                                        <h3 className="contact-item__title">freelancer</h3>
                                        <a href="#@vovapod" className="contact-item__data">@vovapod</a>
                                    </div>
                                </div>
                                <div className="contact-item__background">
                                </div>
                                <div className="contact-item__filter">
                                </div>
                                <div className="contact-item__filter-dark">
                                </div>
                            </a>
                        </div>
                        :
                        ''
                    }




                </div>

            </div>
        </section>
    )
}

export default ContactCards; 