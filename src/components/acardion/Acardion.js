import React, {Component} from 'react'
import Styles from './styles.css'
import ArrowIcon from './../ikon/ArrowIcon';
import CarIcon from './../ikon/CarIcon';
import { render } from '@testing-library/react';
import SellCar from '../SellCar/SellCar';

function ActiveAcardion() {

}

class Acardion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extend: false,
            settings: false
        }
        this.ExtendAcordion = this.ExtendAcordion.bind(this)
    }
    ExtendAcordion() {
        this.setState(({extend,settings}) => ({
            extend: !extend,
            settings: !settings

        }))
    }
    render() {
        const {extend, settings} = this.state
        let classNames = 'arrow'
        let classSettings = 'select'

        if(extend) {
            classNames += ' arrow-active'
        }
        if(settings) {
            classSettings += ' select--active'
        }
    return (
        <div className="acardion">
            <div onClick={this.ExtendAcordion} className="acardion__settings">
                <div className="acardion__arrow">
                    <ArrowIcon classNames={classNames}/>
                </div>
            <div className="acardion__descripteon">
                <CarIcon/>
                <span>Basic Info</span>
            </div>
            <div className="acardion__complete">
                <span>15% complete</span>
            </div>
            </div>
            {<SellCar classSettings={classSettings}/>}
        </div>
    )
    }
}

export default Acardion
