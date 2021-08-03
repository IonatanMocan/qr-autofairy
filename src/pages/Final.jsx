import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import ProgresPage, { ProgressBarThirdPage } from '../components/ProgresPage';
import { Block1 } from './Design';
import BlueButton from '../components/BlueButton';
import QrCodeForVisit from '../images/qr-code-for-visit.jpg'
const FinalPage = styled.div`
max-width: 1330px;
margin: 0 auto;
background-color: white;
justify-content: center;
min-height: 511px;
display: flex;
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
.wrapper {
  margin-top: 54px;
  width: 870px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
    }
  .print {
      max-width: 326px;
      height: 316px;
      margin: 0 auto;
      button {
        width:100%;
      }
      .qr-block {
        width: 325.07px !important;
        height: 231.57px;
        h2 {
          font-size: 60px;
        }
        .qr-info {
          margin: 15px 0;
          width: 100%;
          img{
            margin: 0 15px 0 14px;
          }
        }
      }
  }
  h2 {
    font-family: Roboto;
    font-size: 32px;
    color: #000;
    letter-spacing: 0.01em;
    text-align: center;
    margin: 10px 0;
    line-height: 120%;
  }
  a {
    text-decoration: none;
    color: #000;
    font-family: Roboto;
    font-size: 18px;
    line-height: 94%;
  }
  .visit {
    height: 316px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .print div:nth-child(2) {
    margin: 32px 0px 0px 0px;
  }
`;

const Final = () => {
  return (
    <>
      <Header happend="HI LAURA"/>
        <HeroSale>
          { <h1>
            You are all set! <br />
          Good luck with your sale!
          </h1>}
          <ProgressBarThirdPage>
            <ProgresPage/>
          </ProgressBarThirdPage>
          <FinalPage>
            <div className="wrapper">
              <div className="print">
                  <Block1/>
                  <BlueButton text='PRINT'/>
                </div>
                <div className="visit">
                  <h2>We’ve created a Sales <br /> webpage for you! </h2>
                  <a href="https://autofairy.com/c/fwer283r1">Visit the link: https://autofairy.com/c/fwer283r1</a> <br />
                  <img src={QrCodeForVisit} alt="qr code for visit website"/>
                </div>
            </div>
          </FinalPage>
        </HeroSale>
      <Footer />
    </>
  );
};

export default Final;
