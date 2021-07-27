import React from 'react'
import SellCar from './components/SellCar/SellCar';
import './App.css'
import  styled  from 'styled-components';
import Contact from './components/Contact/Contact';
import DetailsVachine from './components/DetailsVechile/Detailsvechine';
import Upload from './components/Upload/Upload';
import SellPageHeader from './components/SellPageHeader';
import './index.css'
const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    .secondary {
        wdith: 100%;
        display: flex;
        justify-content:center;
    }
    .secondary-btn {
        padding: 20px 70px;
        background-color: #4D8CEC;
        border-radius: 25px;
        border: none;
        font-family: 'Roboto', sans-serif;
        color: white;
        letter-spacing: 1px;
        margin: 40px 0;
        }
`


function App() {
    return (
        <div className="app">
            <SellPageHeader/>
            <Container>
                    <SellCar/>
                    <Contact/>
                    <DetailsVachine/>
                    <Upload/>
            <div className="secondary">
                <button className="secondary-btn" type="button">
                    NEXT
                </button>
            </div>
            </Container>
        </div>
    )
}

export default App
