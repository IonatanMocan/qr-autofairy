import React from 'react';
import styled from 'styled-components';

const ContactFormWrapper = styled.fieldset`
  padding-top: 52px;
  padding-bottom: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    input {
      width: 312px;
      margin: 20px 20px;
      height: 45px;
      background: #ffffff;
      border: 1px solid #4d8cec;
      border-radius: 10px;
      padding: 27.5px 12px;
      font-size: 16px;
      line-height: 94%;
      letter-spacing: 0.01em;
      color: #4b4343;
    }
  }
`;

const ContactForm = ({ values, formik, percentage }) => {
  return (
    <ContactFormWrapper>
      {/* <span style={{ color: 'red' }}>{percentage}%</span> */}
      <div className='row'>
        <input
          type='text'
          placeholder='Name'
          name='contact.name'
          value={values.name}
          onChange={formik.handleChange}
          className='left-input'
        />
        <input
          type='text'
          placeholder='Preferred Time for Call'
          name='contact.time'
          value={values.time}
          onChange={formik.handleChange}
        />
      </div>
      <div className='row'>
        <input
          type='text'
          placeholder='Phone Number'
          name='contact.phone'
          value={values.phone}
          onChange={formik.handleChange}
          className='left-input'
        />
        <input
          type='text'
          placeholder='Email'
          name='contact.email'
          value={values.email}
          onChange={formik.handleChange}
        />
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;
