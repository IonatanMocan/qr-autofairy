import React from 'react';
import styled from "styled-components";

const ContactFormWrapper = styled.fieldset`

`

const ContactForm = ({values, formik, percentage}) => {
    return (
        <ContactFormWrapper>
            <span style={{color: "red"}}>{percentage}%</span>
            <div className="row">
                <input
                    type="text"
                    placeholder="Name"
                    name="contact.name"
                    value={values.name}
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="contact.email"
                    value={values.email}
                    onChange={formik.handleChange}
                />
            </div>
        </ContactFormWrapper>
    );
};

export default ContactForm;