import React from "react";
import styled from "styled-components";


const BlueButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content:center;
button {
  padding: 20px 74px;
  border: none;
  font-family: 'Roboto', sans-serif;
  border-radius: 25px;
  background-color: #4D8CEC;
  color: #fff;
  margin: 20px 0;
}
`; 
export default function BlueButton({title}) {
  return (
    <BlueButtonWrapper>
      <button>
        {title}
      </button>
    </BlueButtonWrapper>
  )
}
