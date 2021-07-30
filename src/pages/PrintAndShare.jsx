import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import ProgresPage from '../components/ProgresPage';

const PrintAndSharePage = styled.div``;

const PrintAndShare = () => {
  return (
    <>
      <Header />
      <PrintAndSharePage>
        <HeroSale>
          <h1>We’ve created a Sales webpage for you! <br /> Please login or sign up to print.</h1>
          <ProgresPage/>
          </HeroSale>
      </PrintAndSharePage>
      <Footer />
    </>
  );
};

export default PrintAndShare;
