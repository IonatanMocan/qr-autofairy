import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CarsHomepage from '../components/CarsHomepage';

import BlueButton from '../components/BlueButton';
import PeopleIllustrationPic from '../images/people-illustration.png';

const HeroWrapper = styled.div`
  height: 496px;
  background-color: #dfeafc;
  position: relative;

  img {
    position: absolute;
  }

  .text-and-button {
    float: right;
    h1 {
      color: #4d8cec;
      font-weight: 700;
      width: 735px;
      font-size: 50px;
      text-align: center;
      display: block;
      line-height: 47px;
      margin: 257px 0 45px 0;
    }
  }
`;

const CarsHomepageWrapper = styled.div`
  margin: 172px 56px 80px 56px;
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroWrapper>
        <img src={PeopleIllustrationPic} alt='' />
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
      <CarsHomepageWrapper>
        <CarsHomepage />
      </CarsHomepageWrapper>
      <Footer />
    </>
  );
};

export default Homepage;
