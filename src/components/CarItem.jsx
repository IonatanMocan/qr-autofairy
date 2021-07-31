import React from 'react';
import styled from 'styled-components';

const CarItemWrapper = styled.div`
  background: #fefefe;
  border-radius: 20px;

  .car-image-data {
    padding: 17px;

    .car-data {
      padding: 16px 20px;

      p {
        margin: 0;
        margin-bottom: 6px;
      }

      p.car-model {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 94%;

        letter-spacing: 0.01em;

        color: #4b4343;
      }

      p.car-price {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 94%;

        letter-spacing: 0.01em;

        color: #4d8cec;
      }

      p.total-view {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 94%;
        /* or 17px */

        letter-spacing: 0.01em;

        color: #4b4343;
      }
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2px;

    .sold,
    .edit {
      height: 54px;
      background: #dfeafc;
      border: none;

      font-weight: 700;
      font-size: 16px;
      line-height: 94%;

      text-align: center;
      letter-spacing: 0.01em;

      color: #e57d1d;
    }

    .sold {
      border-radius: 0px 0px 0px 10px;
    }
    .edit {
      border-radius: 0px 0px 10px 0px;
      color: #4d8cec;
    }
  }
`;

const CarImageWrapper = styled.section`
  height: 227px;
  background: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const CarItem = ({ model, price, view, image }) => {
  return (
    <CarItemWrapper>
      <div className='car-image-data'>
        <CarImageWrapper image={image}></CarImageWrapper>
        <div className='car-data'>
          <p className='car-model'>{model}</p>
          <p className='car-price'>{price}</p>
          <p className='total-view'>{view}</p>
        </div>
      </div>
      <div className='buttons'>
        <button className='sold'>SOLD</button>
        <button className='edit'>EDIT</button>
      </div>
    </CarItemWrapper>
  );
};

export default CarItem;
