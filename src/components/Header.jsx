import React from 'react';
import styled from 'styled-components';
import AutofairyLogo from '../images/AutofairyLogo';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #fff;
  max-width: 1330px;
  display: flex;
  padding: 15px 10px;
  margin: 0 auto;
  justify-content: space-between;
  .logo-container {
    display: flex;
    align-items: center;
    .logo-image {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo-text {
      width: 94px;
      margin-left: 10px;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      line-height: 14px;
    }
  }

  .greeting {
    display: flex;
    .greeting-user {
      color: #4d8cec;
      width: max-content;
      margin: 0 40px 0 0; 
      font-weight: 700;
      display: flex;
      align-items: center;
    }
  }
  .greeting div:nth-child(2) {
    margin: 15px 0;
  }
`;

const Header = (props) => {
  return (
    <header>
      <HeaderWrapper>
        <div className='logo-container'>
          <div className='logo-image'>
            <Link to='/'>
              <AutofairyLogo />
            </Link>
          </div>
          <div className='logo-text'>SALES PAPER GENERATOR</div>
        </div>
        <div className='greeting'>
          <div className='greeting-user'>{props.happend}</div>
          {props.saveDraft} 
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
