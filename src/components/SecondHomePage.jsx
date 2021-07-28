import React from 'react'
import Contact from './Contact/Contact';
import SellCar from './SellCar/SellCar';
import DetailsVachine from './Detailsvehicle/Detailsvehicle';
import Upload from './Upload/Upload';
import SellPageHeader from './SellPageHeader';
import styled from 'styled-components'
import CombineComponents from './CombineComponents';
import CarIcon from './ikon/CarIcon';
import UploadIcon from './ikon/UploadIcon'
import ContactIcon from './ikon/ContactIcon';
import BlueButton from './BlueButton'
const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`
const SecondHomePageWrapper = styled.div`
    width: 100%;

`;

function SecondHomePage() {
    return (
            <SecondHomePageWrapper>
                <SellPageHeader/>
                <Container>
                    <CombineComponents mainComponentBlock={<SellCar/>} icon={<CarIcon/>} title='Basic Info' level='15%'/>
                    <CombineComponents mainComponentBlock={<Contact/>} icon={<ContactIcon/>} title='Contact information' level='50%'/>
                    <CombineComponents mainComponentBlock={<DetailsVachine/>} icon={<CarIcon/>} title='Detailed Vehicle information ' level='75%'/>
                    <CombineComponents mainComponentBlock={<Upload/>} icon={<UploadIcon/>} title='Upload photos' level='100%' />
                    <BlueButton  title="NEXT"/>
                </Container>
            </SecondHomePageWrapper>
    )
}

export default SecondHomePage
