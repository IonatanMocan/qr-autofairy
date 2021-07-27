import React from 'react'
import SellCar from './components/SellCar/SellCar';
import './App.css'
import  styled  from 'styled-components';
import Contact from './components/Contact/Contact';
import DetailsVachine from './components/DetailsVechile/Detailsvechine';
import Upload from './components/Upload/Upload';

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`

function App() {
    return (
        <Container>
            <SellCar/>
            <Contact/>
            <DetailsVachine/>
            <Upload/>
        </Container>
    )
}

export default App
