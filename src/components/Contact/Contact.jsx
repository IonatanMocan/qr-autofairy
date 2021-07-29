import React from 'react'
import styled from 'styled-components'
import '../main.css'

const ContactsWrapper = styled.div`
width: 100%;
justify-content: center;
display: flex;
padding: 38px;
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
}
`;

export default  function Contact() {
      return (
        <ContactsWrapper>
                  <div className="select__wrapper">
                      <input autoComplete="true" className="select__label" placeholder="Name" type="text" />
                      <input autoComplete="true"className="select__label" placeholder="Phone Number" type="number" />
                  </div>
                  <div className="select__wrapper">
                      <input autoComplete="true" className="select__label" placeholder="Preferred Time for Call" type="text" />
                      <input autoComplete="true" className="select__label" placeholder="Email" type="email" />
                  </div>
          </ContactsWrapper>
    )
}
