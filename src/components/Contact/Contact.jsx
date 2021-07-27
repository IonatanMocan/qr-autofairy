import React, { Component } from 'react'
import Acardion from '../acardion/Acardion'
import '../main.css'
import ContactIcon from './../ikon/ContactIcon';


class Contact extends Component{
    constructor(props) {
      super(props)
      this.state = {
        settings: false
      }
      this.addSettings = this.addSettings.bind(this)
    }
    addSettings() {
      this.setState(({settings}) => ({
        settings: !settings
    }))
    }
    render() {
      const {settings} = this.state
      let classSettings = 'select'

      if(settings) {
        classSettings += ' select--active'
      }
      return (
        <>
        <Acardion title="Contact information" level='50%' icon={<ContactIcon/>} addSettings={this.addSettings} />
        <div className={classSettings}>
        <form className="select__container contacts">
                  <div className="select__wrapper">
                      <input autoComplete className="select__label" placeholder="Name" type="text" />
                      <input className="select__label" placeholder="Phone Number" type="number" />
              
                  </div>
                  <div className="select__wrapper">
                      <input className="select__label" placeholder="Preferred Time for Call" type="text" />
                      <input className="select__label" placeholder="Email" type="email" />
                  </div>
          </form>
          </div>
        </>
    )
    }
}

export default Contact
