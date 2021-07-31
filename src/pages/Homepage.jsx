import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CarsHomepage from '../components/CarsHomepage';

import BlueButton from '../components/BlueButton';
import PeopleIllustrationPic from '../images/people-illustration.png';

const HeroWrapper = styled.div`
  min-height: 496px;
  background-color: #dfeafc;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  .header-image {
    max-width: 748.17px;
    img {
      width:100%;
    }
  }

  .text-and-button {
    margin-bottom: 40px;
    h1 {
      color: #4d8cec;
      line-height: 94%;
      margin-top: 45px;
      font-weight: 700;
      font-size: calc(24px + 36 * (100vw / 1920));
      text-align: center;
      display: block;
      line-height: 47px;
    }
    a div {
      margin: 45px 0 0 0;
    }
  }
`;


const Homepage = () => {
  return (
    <>
      <Header happend="HI, LAURA"/>
      <HeroWrapper>
        <div className="header-image">
          <img src={PeopleIllustrationPic} alt='' />
        </div>
        <div className='text-and-button'>
          <h1>
            Let us do the work, <br />
            While you can enjoy your life.
          </h1>
          <Link className="link" to='/draft'>
            <BlueButton text='SALE WITH US' />
          </Link>
        </div>
      </HeroWrapper>
        <CarsHomepage />
      <Footer />
    </>
  );
};

export default Homepage;
