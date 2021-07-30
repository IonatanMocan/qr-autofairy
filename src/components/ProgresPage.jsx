import React from 'react'
import styled from 'styled-components'

export const ProgresPagewrapper  = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 540px;
margin: 0 auto;
.line {
    width: 124px;
    height: 2px;
    background-color: ${props => props.lineDefault ? '#4D8CEC': '#C4C4C4'};
}
.line-left {
    background-color: ${props => props.lineLeft ? '#4D8CEC': '#C4C4C4'};
}
.progres__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.addIteam ? '#4D8CEC': '#C4C4C4'}
    h2 {
        margin: 0;
    }
}
.progres__item span {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color:  ${props => props.item ? '#4D8CEC': '#C4C4C4'};
    color:  ${props => props.item ? '#4D8CEC': '#C4C4C4'};
}
.one span{
    background-color:  ${props => props.itemOne ? '#4D8CEC': '#C4C4C4'};
    color:  ${props => props.itemOne ? '#4D8CEC': '#C4C4C4'};
}
.two {
    background-color:  ${props => props.itemTwo ? '#4D8CEC': '#C4C4C4'};
    color:  ${props => props.itemTwo ? '#4D8CEC': '#C4C4C4'};
}
`;

function ProgresPage() {
    return (
            <ProgresPagewrapper addIteam >
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
            </ProgresPagewrapper>
        )
    }

export default ProgresPage
