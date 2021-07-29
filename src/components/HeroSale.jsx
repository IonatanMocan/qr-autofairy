import React, { Children } from 'react';
import styled from 'styled-components';

const HeroSaleWrapper = styled.section`
  height: 592px;
  background-color: #dfeafc;
  /* background-color: #fff; */
  box-sizing: border-box;
  color: #4d8cec;
  padding-top: 87px;

  h1 {
    margin: 0;
    display: block;
    font-weight: bold;
    font-size: 50px;
    line-height: 94%;
    /* or 47px */

    text-align: center;
    letter-spacing: 0.01em;

    /* City Blue */
  }
`;

const HeroSale = ({ children }) => {
  return <HeroSaleWrapper>{children}</HeroSaleWrapper>;
};

export default HeroSale;
