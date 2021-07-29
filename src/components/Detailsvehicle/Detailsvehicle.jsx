import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import '../main.css'

const Transmission = [
  { value: 'Transmission', label: 'Transmission' },
  { value: 'Maker-1', label: 'Maker-1' },
  { value: 'Maker-2', label: 'Maker-2' }
]
const Engine = [
  { value: 'Engine', label: 'Engine' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const ExteriorColor = [
  { value: 'Exterior Color', label: 'Exterior Color' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Passengers = [
  { value: 'Passengers', label: 'Passengers' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const FuelType = [
  { value: 'Fuel Type', label: 'Fuel Type' },
  { value: 'Maker-1', label: 'Maker-1' },
  { value: 'Maker-2', label: 'Maker-2' }
]
const Drivetrain = [
  { value: 'Drivetrain', label: 'Drivetrain' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const InteriorColor = [
  { value: 'Interior Color', label: 'Interior Color' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const Doors = [
  { value: 'Doors', label: 'Doors' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const DetailsvehicleWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap;
padding: 38px;
width: 100%
background: ${props => props.colored ? 'white' : 'red'};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;`;

export default function Detailsvehicle() {
      return (
            <DetailsvehicleWrapper colored>
              <div className="select__wrapper">
                  <Select className="select__item" options={Transmission} defaultValue={Transmission[0]}/>
                  <Select className="select__item" options={Engine} defaultValue={Engine[0]}/>
                  <Select className="select__item" options={ExteriorColor} defaultValue={ExteriorColor[0]}/>
                  <Select className="select__item" options={Passengers} defaultValue={Passengers[0]}/>
                </div>
                <div className="select__wrapper">
                      <Select className="select__item" options={FuelType} defaultValue={FuelType[0]}/>
                      <Select className="select__item" options={Drivetrain} defaultValue={Drivetrain[0]}/>
                      <Select className="select__item" options={InteriorColor} defaultValue={InteriorColor[0]}/>
                      <Select className="select__item" options={Doors} defaultValue={Doors[0]}/>
                </div>
                <div className="select-surce">
                    <img src='https://lh3.google.com/u/1/d/1HgoQHsYvDdKs-ZUwfA9SJcqVnBCIqgce=w1920-h969-iv1' alt="" />
                </div>
        </DetailsvehicleWrapper>
    )
}
