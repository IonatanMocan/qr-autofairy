import React, { useState } from 'react';
import styled from 'styled-components';
import ChevronUp from '../images/ChevronUp';
import ChevronDown from '../images/ChevronDown';

let isClicked = false;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 80px;
  /* background:  */
  background-color: ${() => (isClicked ? '#F9F9F9' : '#DFEAFC')};
  border-radius: 10px;

  hr {
    width: 90%;
    height: 4px;
    background-color: rgba(77, 140, 236, 0.18);
    border: none;
    margin: 0;
    margin-bottom: 26px;
    margin-top: 10px;
  }

  .accordion-heading {
    /* margin-top: ${() => (isClicked ? '20px' : '10px')} */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 94%;
      /* identical to box height, or 15px */

      text-align: center;
      letter-spacing: 0.01em;

      color: #6a5d5d;
    }

    .progress {
      color: ${() =>
        isClicked ? 'rgba(229, 125, 29, 1)' : 'rgba(0, 105, 164, 1)'};
    }

    .center {
      display: flex;
      align-items: center;

      p.title {
        margin-left: 60px;
      }
    }
  }
`;

const Accordion = ({ children, icon, title, progress }) => {
  const [clicked, setClicked] = useState(true);
  isClicked = clicked;

  return (
    <AccordionWrapper>
      <div className='accordion-heading' onClick={() => setClicked(!clicked)}>
        <div className='left'>{clicked ? <ChevronDown /> : <ChevronUp />}</div>
        <div className='center'>
          {React.createElement(icon)}
          <p className='title'>{title}</p>
        </div>
        <div className='right-side'>
          <p className='progress'>{progress}</p>
        </div>
      </div>

      {clicked ? (
        <>
          <hr />
          {children}
        </>
      ) : null}
    </AccordionWrapper>
  );
};

export default Accordion;
