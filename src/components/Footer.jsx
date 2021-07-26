import React from 'react';
import styled from 'styled-components';
import AutofairyWhiteLogo from '../images/AutofairyWhiteLogo';

const FooterWrapper = styled.div`
  height: 355px;
  box-sizing: border-box;
  background-color: #3b8ae0;
  display: flex;
  justify-content: space-between;
  padding: 47px 262px 72px 234px;
  color: #fff;
  font-size: 16px;

  p {
    margin: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }

  .logo-and-adresses {
    h3 {
      margin-top: 31px;
      margin-bottom: 30px;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      color: #ffffff;
    }

    .email {
      margin-bottom: 31px;
    }
  }

  .legal-links {
    margin-top: 122px;
    font-size: 12px;
    line-height: 18px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className='logo-and-adresses'>
        <AutofairyWhiteLogo />
        <h3>CONTACT US</h3>
        <p className='email'>autofairy.tech@gmail.com</p>
        <p className='address'>
          4380 Agar Dr., <br />
          Richmond, <br />
          BC V7B 1A3
        </p>
      </div>
      <div className='legal-links'>
        <p className='legal-link'>Privacy Policy</p>
        <p className='legal-link'>Terms of Services</p>
        <p className='legal-link'>Support</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
