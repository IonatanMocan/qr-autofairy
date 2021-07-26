import React from 'react';
import styled from 'styled-components';
import CarItem from './CarItem';
import CarPic from '../images/car-item.png';

const CarsHomepageWrapper = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 36px 30px 59px 30px;

  .car-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 34px;

    .car-item {
      width: 100%;
      height: 200px;
      background-color: pink;
    }
  }
`;

function CarsHomepage() {
  return (
    <CarsHomepageWrapper>
      <section className='car-grid'>
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
        <CarItem
          model='2020 FORD EXPLORER'
          price='$33,400.00'
          view='Total View: 340'
          image={CarPic}
        />
      </section>
    </CarsHomepageWrapper>
  );
}

export default CarsHomepage;
