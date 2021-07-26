import React from 'react'
import Select from 'react-select'
import './styles.css'


const optionsMaker = [
    { value: 'Maker', label: 'Maker' },
    { value: 'Maker-1', label: 'Maker-1' },
    { value: 'Maker-2', label: 'Maker-2' }
  ]
  const optionsModel = [
    { value: 'Model', label: 'Model' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const optionsYear = [
    { value: 'Year', label: 'Year' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const optionsTrim = [
    { value: 'Trim', label: 'Trim' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
function SellCar(props) {
    return (
        <div className={props.classSettings}>
            <div className="select__container">
                <div className="select__wrapper">
                    <Select className="select__item" options={optionsModel} defaultValue={optionsModel[0]}/>
                    <Select className="select__item" options={optionsYear} defaultValue={optionsYear[0]}/>
                    <input className=" select__label" placeholder="KM" type="text" />
                     
                </div>
                <div className="select__wrapper">
                    <Select className="select__item" options={optionsTrim} defaultValue={optionsTrim[0]}/>
                    <Select className="select__item" options={optionsMaker} defaultValue={optionsMaker[0]}/>
                    <input className=" select__label" placeholder="Price" type="text" />
                </div>
                <textarea className="select__label select__descripteon" cols="30" rows="10" placeholder="Description"></textarea>
            </div>
            <div className="select-surce">
                <img src='https://lh3.google.com/u/1/d/1JhMN7mPibD8j-vgLyj6A87ofKiPLdK-G=w1920-h969-iv1' alt="" />
            </div>
        </div>
        
    )
}

export default SellCar
