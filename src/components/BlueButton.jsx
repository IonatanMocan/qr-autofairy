import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    width: 190.26px;
    height: 54px;
    left: 984.36px;
    top: 486px;
    color: #ffffff;
    font-weight: 300;

    background: #4d8cec;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    line-height: 94%;
    /* identical to box height, or 15px */
    text-align: center;
    letter-spacing: 0.01em;
  }
`;

function BlueButton({ text }) {
  return (
    <ButtonWrapper>
      <button>{text}</button>
    </ButtonWrapper>
  );
}

export default BlueButton;
