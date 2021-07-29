import React from 'react';
import HeroSale from '../components/HeroSale';
import styled from 'styled-components';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';

import CarIcon from '../images/CarIcon';
import PersonIcon from '../images/PersonIcon';
import CameraIcon from '../images/CameraIcon';
import CarBlueprint from '../images/CarBlueprint';
// import CarBlueprint2 from '../images/CarBlueprint2';

const DraftPage = styled.div`
  position: relative;
  height: 2500px;
`;

const FormWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 381px;
  padding-right: 54px;
  padding-left: 54px;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
`;

const Draft = () => {
  return (
    <>
      <Header />
      <DraftPage>
        <HeroSale>
          <h1>
            SELL CARS <br />
            SAFE, QUICK, EFFORTLESS
          </h1>
        </HeroSale>

        <FormWrapper>
          <h2>Content</h2>
          <form action='/action_page.php'>
            <Accordion
              icon={CarIcon}
              title='Basic Info'
              progress='50% complete'
            >
              <div className='single-form-section'>
                {/* <hr /> */}
                <div className='basic-info'>
                  <div className='basic-info-form'>place for fields</div>
                  <div className='basic-info-car-image'>
                    <CarBlueprint />
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion
              icon={PersonIcon}
              title='Contact Information'
              progress='50% complete'
            >
              <p>some text</p>
            </Accordion>
            <Accordion
              icon={CarIcon}
              title='Detailed Vehicle Informations'
              progress='50% complete'
            >
              <div className='single-form-section'>
                {/* <hr /> */}
                <div className='basic-info'>
                  <div className='basic-info-form'>place for fields</div>
                  <div className='basic-info-car-image'>
                    <CarBlueprint />
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion
              icon={CameraIcon}
              title='Upload Photos'
              progress='50% complete'
              onClick={() => console.log('this is clicked')}
            >
              <p>some text</p>
            </Accordion>
          </form>
        </FormWrapper>
      </DraftPage>

      <Footer />
    </>
  );
};

export default Draft;
