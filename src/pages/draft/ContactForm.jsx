import React from 'react';
import styled from 'styled-components';

const ContactFormWrapper = styled.fieldset`
  width: 100%;
  /* min-height: 286px; */
  /* padding: 44px 21px 69px 21px; */
  padding-top: 52px;
  padding-bottom: 52px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: #ffffff;
  border: 2px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 20px;

  .row {
    &:nth-child(1) {
      margin-bottom: 35px;
    }

    input {
      width: 312px;
      height: 45px;
      background: #ffffff;
      border: 1px solid #4d8cec;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 14px;

      font-size: 16px;
      line-height: 94%;
      /* or 15px */

      letter-spacing: 0.01em;

      color: #4b4343;
    }

    .left-input {
      margin-right: 60px;
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
