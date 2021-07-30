import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';

const DesignPage = styled.div``;

const Design = () => {
  return (
    <>
      <Header />
      <DesignPage>
        <HeroSale>
          <h1>
            ALMOST DONE, <br />
            PICK A DESIGN THAT FITS YOUR NEED
          </h1>
        </HeroSale>
      </DesignPage>
      <Footer />
    </>
  );
};

export default Design;
