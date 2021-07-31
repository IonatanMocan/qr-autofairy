import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import ProgresPage, { ProgressBarThirdPage } from '../components/ProgresPage';
import SignUpWithGoogle from '../components/SignUpWithGoogle';


const PrintAndSharePage = styled.div``;

function PrintAndShare()  {
  return (
    <>
      <Header />
      <PrintAndSharePage>
        <HeroSale>
          <h1>We’ve created a Sales webpage for you! <br /> Please login or sign up to print.</h1>
          <ProgressBarThirdPage>
            <ProgresPage/>
            </ProgressBarThirdPage>
          <SignUpWithGoogle/>
          </HeroSale>
      </PrintAndSharePage>
      <Footer />
    </>
  );
};

export default PrintAndShare;

