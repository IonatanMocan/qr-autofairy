import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import ProgresPage from '../components/ProgresPage';

const FinalPage = styled.div``;

const Final = () => {
  return (
    <>
      <Header />
      <FinalPage>
        <HeroSale>
          { <h1>
            You are all set! <br />
          Good luck with your sale!
          </h1>}
          <ProgresPage/>
        </HeroSale>
      </FinalPage>
      <Footer />
    </>
  );
};

export default Final;
