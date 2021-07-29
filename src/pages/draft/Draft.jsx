import React from 'react';
import HeroSale from '../../components/HeroSale';
import styled from 'styled-components';
import '../../App.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';

import CarIcon from '../../images/CarIcon';
import PersonIcon from '../../images/PersonIcon';
import CameraIcon from '../../images/CameraIcon';
import CarBlueprint from '../../images/CarBlueprint';
import BasicInfoForm from "./BasicInformation";
import {useDraftForm} from "./useDraftForm";
import {countPercentage} from "./utils";
import ContactForm from "./ContactForm";
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






const Draft = () => {
  const {formik, onSelectReactSelect} = useDraftForm();
  const basicInfoPercentage = countPercentage(formik, 'basicInfo').toFixed(0)
  const contactInfoPercentage = countPercentage(formik, 'contact').toFixed(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.submitForm();
  }


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
              progress={`${basicInfoPercentage}% complete`}
            >
              <div className='single-form-section'>
                <BasicInfoForm
                    formik={formik}
                    onSelect={onSelectReactSelect}
                    percentage={basicInfoPercentage}
                    values={formik.values.basicInfo}
                />
              </div>
            </Accordion>
            <Accordion
              icon={PersonIcon}
              title='Contact Information'
              progress={`${contactInfoPercentage}% complete`}
            >
              <ContactForm
                  values={formik.values.contact}
                  formik={formik}
                  percentage={contactInfoPercentage}
              />
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
            <button type="submit" onClick={handleSubmit}>Submit me</button>
          </form>
        </FormWrapper>
      </DraftPage>

      <Footer />
    </>
  );
};

export default Draft;
