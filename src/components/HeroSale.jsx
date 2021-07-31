import React from 'react';
import styled from 'styled-components';

const HeroSaleWrapper = styled.section`
  min-height: 592px;
  background-color: #dfeafc;
  box-sizing: border-box;
  color: #4d8cec;
  padding: 87px 0;

  h1 {
    margin: 0;
    display: block;
    font-weight: bold;
    font-size: 50px;
    line-height: 94%;
    text-align: center;
    letter-spacing: 0.01em;
  }
`;

const HeroSale = ({ children }) => {
  return <HeroSaleWrapper>{children}</HeroSaleWrapper>;
};

export default HeroSale;
