import React from "react";
import styled from "styled-components";


const BlueButtonWrapper = styled.button`
  padding: 20px 74px;
  border: none;
  font-family: 'Roboto', sans-serif;
  border-radius: 25px;
  background: #4D8CEC;
  color: #fff;

`

function BlueButton({text}) {
  return (
    <BlueButtonWrapper>
      {text}
    </BlueButtonWrapper>
  )
}

export default BlueButton
