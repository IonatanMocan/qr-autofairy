import React from 'react';
import styled from 'styled-components';
import AutofairyLogo from '../images/AutofairyLogo';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;

  .logo-container {
    display: flex;
    align-items: center;
    align-items: center;

    .logo-image {
      margin: 17px 11px 27px 23px;
    }

    .logo-text {
      width: 94px;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      line-height: 14px;
    }
  }

  .greeting {
    .greeting-user {
      color: #4d8cec;
      margin: 41px 69px 27px 0;
      font-weight: 700;
    }
  }
`;

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <div className='logo-container'>
          <div className='logo-image'>
            <AutofairyLogo />
          </div>
          <div className='logo-text'>SALES PAPER GENERATOR</div>
        </div>
        <div className='greeting'>
          <div className='greeting-user'>HI, LAURA</div>
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
