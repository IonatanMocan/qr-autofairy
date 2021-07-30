import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width: 555px;
    margin: 80px auto;
    .progres__item {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .progres__item span {
        width: 35px;
        display: flex;
        justify-content: center;
        background-color: #4D8CEC;
        align-items: center;
        height: 35px;
        border-radius: 100%;
        color:  white;
    }
    .progres__item h2 {
        color: #4D8CEC;
        margin-top: 20px;
        font-size: 18px;
    }
    .line {
        width: 152px;
        background-color: #4D8CEC;
        height: 3px;
        margin-top: 20px;
    }`;

function ProgresPage() {
    return (
            <Wrapper>
                        <div className="progres__item one">
                                <span> 1</span>
                                <h2>DRAFT</h2>                
                        </div>
                        <div className="line line-left "/>
                        <div className="progres__item two">
                            <span>2</span>
                            <h2>DESIGN</h2> 
                        </div>
                        <div className="line"/>
                        <div className="progres__item three">
                            <span>3</span>
                            <h2>PRINT & SHARE</h2> 
                        </div>
            </Wrapper>
        )
    }

export default ProgresPage
