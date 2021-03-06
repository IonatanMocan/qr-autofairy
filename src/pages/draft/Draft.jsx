import React from 'react';
import HeroSale from '../../components/HeroSale';
import styled from 'styled-components';
import '../../App.css';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';

import CarIcon from '../../images/CarIcon';
import PersonIcon from '../../images/PersonIcon';
import CameraIcon from '../../images/CameraIcon';
import CarBlueprint from '../../images/CarBlueprint';
import BasicInfoForm from './BasicInformation';
import { useDraftForm } from './useDraftForm';
import { countPercentage } from './utils';
import ContactForm from './ContactForm';
import BlueButton from '../../components/BlueButton';
import DetailedInfoForm from './DetailedInformation';
import ProgresPage, { ProgressBarFirstPage }  from '../../components/ProgresPage';

// import CarBlueprint2 from '../../images/CarBlueprint2';

const DraftPage = styled.div`
  position: relative;
  max-height: 4500px;
`;

const FormWrapper = styled.div`
  transform: translate(0px, -125px);
  max-width: 1330px;
  margin: 0 auto;
`;
const Draft = () => {
  const { formik, onSelectReactSelect } = useDraftForm();
  const basicInfoPercentage = countPercentage(formik, 'basicInfo').toFixed(0);
  const contactInfoPercentage = countPercentage(formik, 'contact').toFixed(0);
  const detailedInfoPercentage = countPercentage(formik, 'detailed').toFixed(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.submitForm();
  };
  return (
    <>
      <Header happend="HI, LAURA" saveDraft={<BlueButton text="SAVE DRAFT"/>}/>
      <DraftPage>
        <HeroSale>
          <h1>
            SELL CARS <br />
            SAFE, QUICK, EFFORTLESS
          </h1>
          <ProgressBarFirstPage>
            <ProgresPage />
            </ProgressBarFirstPage>
        </HeroSale>

        <FormWrapper>
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
                <div className='basic-info-car-image'>
                  <CarBlueprint />
                </div>
              </div>
            </Accordion>
            <Accordion
              icon={PersonIcon}
              title='Contact Information'
              progress={`${contactInfoPercentage}% complete`}
            >
              <ContactForm
                formik={formik}
                percentage={contactInfoPercentage}
                values={formik.values.contact}
              />
            </Accordion>
            <Accordion
              icon={CarIcon}
              title='Detailed Vehicle Informations'
              progress={`${detailedInfoPercentage}% complete`}
            >
              <div className='single-form-section'>
                <DetailedInfoForm
                  formik={formik}
                  onSelect={onSelectReactSelect}
                  percentage={detailedInfoPercentage}
                  values={formik.values.detailed}
                />
                <div className='basic-info-car-image'>
                  <CarBlueprint />
                </div>
              </div>
            </Accordion>
            <Accordion
              icon={CameraIcon}
              title='Upload Photos'
              progress='50% complete'
            >
              <p>gallery</p>
            </Accordion>
            {/* <button type='submit' onClick={handleSubmit}>
              Submit me
            </button> */}
            <Link className="link" to='/design'>
              <BlueButton text='NEXT' />
            </Link>
          </form>
        </FormWrapper>
      </DraftPage>

      <Footer />
    </>
  );
};

export default Draft;
