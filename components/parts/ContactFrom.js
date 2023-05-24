
import React, { useState } from 'react';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { useForm } from 'react-hook-form';

import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

function ContactForm() {

    // console.log(process.env.GRAPHQLSERVER)

    const [formSatatus, setformSatatus] = useState(false);
    const [formSatatusText, setformSatatusText] = useState('');
    const [dataRange, setDataRange] = useState(1);



    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        ContactUsForm(data);
        setformSatatusText('Your request was sent! Thank you!');
        setformSatatus(true);
        reset();

        setTimeout(() => {
            setformSatatus(false);
        }, 2000)
    };

    async function saveForm(data_form) {
        //console.log(data_form);
        const cache = new InMemoryCache();
        const link = new HttpLink({
            uri: `${process.env.GRAPHQLSERVER}`
        });
        const client = new ApolloClient({
            cache,
            link
        });
        // console.log(data_form);
        const { data } = await client.mutate({
            mutation: gql`
                mutation createContactForm($name: String!,$email: String!,$message: String!,$project_service: String ,$project_size: String){
                createContactForm(input: { data: { name: $name, email: $email ,message: $message,project_service: $project_service ,project_size: $project_size} }){
                    contactForm{
                        id
                        name
                        email
                        message
                        project_size
                        project_service
                    }
                }
                }
              `,
            variables: {
                "name": data_form.name,
                "email": data_form.email,
                "message": data_form.desc,
                "project_size": data_form.project_size,
                "project_service": data_form.project_service
            },
        });

        // console.log(data);
        return data;

    }

    const ContactUsForm = async (data) => {

        let data_form = await { name: data.name, email: data.email, desc: data.desc, project_service: data.project_service, project_size: data.project_size };
        // console.log(data_form);
        let result;
        result = await saveForm(data_form);

        //console.log(result);
        // console.log(data_form);
        // console.log(result);
        // if(result)
        // console.log(result.createForm.form.id)

        if (result.createContactForm.contactForm.id.length > 5) {
            // console.info('For succsesed');

        }

        // result.user => 'Ada Lovelace'
    }



    return (
        <section className="join-to-us" id="join-to-us">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-5 col-lg-6 col-xxl-7">
                        <h2 className="section-title">
                            ready to join us?
                        </h2>
                    </div>
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xxl-5">
                        <form action="" className="join-to-us-form" onSubmit={handleSubmit(onSubmit)}>

                            <div className="join-to-us-form-input-inner">
                                <label htmlFor="join-to-us-form__name" className="join-to-us-form__label">Name</label>
                                <input type="text" id="join-to-us-form__name" className={"join-to-us-form__input " + (errors.name && errors.name.type === "required" || errors.name && errors.name.type === "maxLength" || errors.name && errors.name.type === "pattern" ? 'error' : '')} {...register("name", { required: true, maxLength: 80, pattern: /^[A-Z]+$/i })} />
                                <p className="join-to-us-form__error">

                                </p>
                            </div>

                            <div className="join-to-us-form-input-inner">
                                <label htmlFor="join-to-us-form__email" className="join-to-us-form__label">Email</label>
                                <input type="text" id="join-to-us-form__email" className={"join-to-us-form__input " + (errors.email && errors.email.type === "required" || errors.email && errors.email.type === "pattern" ? 'error' : '')} {...register("email", { required: "This is required.", pattern: /^\S+@\S+$/i })} />
                                <p className="join-to-us-form__error">

                                </p>
                            </div>
                            <div className="join-to-us-form-input-inner">
                                <label htmlFor="join-to-us-form__proj-size" className="join-to-us-form__label">Project service</label>
                                <select defaultValue={'0'} id="join-to-us-form__proj-size" className={"join-to-us-form__select " + (errors.project_service ? 'error' : '')} {...register("project_service", { validate: (value) => value.length > 3 })} >
                                    <option value="0" disabled> Choose service</option>
                                    <option value="pr13">pr13</option>
                                    <option value="pr13">pr13</option>
                                    <option value="pr13">pr13</option>
                                </select>
                                <p className="join-to-us-form__error">
                                </p>
                            </div>
                            <div className="join-to-us-form-input-inner">
                                <label htmlFor="join-to-us-form__range" className="join-to-us-form__label">Project size</label>
                                <span className="join-to-us-form__range-details" >Up to {dataRange} week</span>
                                <input type="range" id="join-to-us-form__range" defaultValue='0' className={"join-to-us-form__range " + (errors.project_size && errors.project_size.type === "minLength" ? 'error' : '')} {...register("project_size", { required: true, minLength: 0 })}
                                    onChange={
                                        () => {
                                            setDataRange(event.target.value)
                                        }
                                    }
                                />
                                <p className="join-to-us-form__error">
                                </p>
                            </div>
                            <div className="join-to-us-form-textarea-inner">
                                <label htmlFor="join-to-us-form__description" className="join-to-us-form__label">Description</label>
                                <textarea name="" cols="30" rows="10" id="join-to-us-form__description" className={"join-to-us-form__textarea " + (errors.desc && errors.desc.type === "required" ? 'error' : '')} {...register("desc", { required: true })}></textarea>
                                <p className="join-to-us-form__error">
                                </p>
                            </div>

                            {formSatatus === false ?
                                <button className="join-to-us-form__send">Send</button>
                                : ''
                            }


                            {formSatatus === true ?
                                <p className={"join-to-us-form__status " + (formSatatus === true ? 'visible' : '')}>
                                    {formSatatusText}
                                </p>
                                : ''
                            }

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactForm