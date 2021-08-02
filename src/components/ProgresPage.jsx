import React from 'react'
import styled from 'styled-components';

export const WrapperProgressBar = styled.div`
max-width: 600px;
margin: 0 auto; 
    .wrapper {
        display:flex;
        justify-content: space-between;
        width: 100%;
        margin: 80px auto;
        .progres__item {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }
    .progres__item span {
        border: 2px solid #717171; 
        border-radius: 100%;
        display: flex;
        width: 35px;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: #717171;
    }
    .progres__item h2 {
        color: #717171;
        margin-top: 20px;
        width: max-content;
        font-size: 18px;
    }
    .line {
        width: 100%;
        background-color: #C4C4C4;
        height: 3px;
        margin-top: 20px;
    }`;
export const ProgressBarFirstPage = styled(WrapperProgressBar)`
    .one span {
        color: white;
        border: none;
        background-color: #4D8CEC;
    }
    .one h2 {
        color: #4D8CEC;
    }
`;
export const ProgressBarSecondPage = styled(ProgressBarFirstPage )`
    .two span {
        color: white;
        border: none;
        background-color: #4D8CEC;
    }
    .two h2 {
        color: #4D8CEC;
    }
    .line-left {
        background-color:#4D8CEC;
    }
`;
export const ProgressBarThirdPage = styled(ProgressBarSecondPage)`
    .three span {
        color: white;
        border: none;
        background-color: #4D8CEC;
    }
    .three h2 {
        color: #4D8CEC;
    }
    .line-right {
        background-color:#4D8CEC;
    }
`
function ProgresPage( ) {
    return (
            <WrapperProgressBar>
                <div className="wrapper">
                    <div className="progres__item one">
                                <span> 1</span>
                                <h2>DRAFT</h2>                
                        </div>
                            <div className="line line-left "/>
                        <div className="progres__item two">
                            <span>2</span>
                            <h2>DESIGN</h2> 
                        </div>
                                <div className="line line-right"/>
                        <div className="progres__item three">
                            <span>3</span>
                            <h2>PRINT & SHARE</h2> 
                        </div>
                </div>
            </WrapperProgressBar>
        )
    }

export default ProgresPage
