import React from 'react'
import SellCar from './components/SellCar/SellCar';
import './App.css'
import  styled  from 'styled-components';
import Acardion from './components/acardion/Acardion';

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`
function App() {
    return (
        <Container>
            <Acardion/>
        </Container>
    )
}

export default App
