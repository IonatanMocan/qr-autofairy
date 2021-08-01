import React from 'react';
import styled from 'styled-components';
import AutofairyWhiteLogo from '../images/AutofairyWhiteLogo';

const FooterWrapper = styled.div`
background-color: #3b8ae0;
wdith:100%;
  .footer {
    max-width:1330px;
    flex-wrap:wrap;
    min-height: 355px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #fff;
    margin: 0 auto;
    font-size: 16px;
    padding: 20px;
  }
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
      <div className="footer">
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
      </div>
    </FooterWrapper>
  );
}

export default Footer;
