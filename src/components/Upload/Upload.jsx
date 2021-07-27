import React, { Component } from 'react'
import Acardion from '../acardion/Acardion'
import CarIcon from '../ikon/CarIcon'
import './styles.css'
import UploadIcon from './../ikon/UploadIcon';
import AddMoreIcon from './../ikon/AddMoreIcon';

class Upload extends Component {
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
        <Acardion title="Upload photos" level='100%' icon={<UploadIcon/>} addSettings={this.addSettings} />
        <div className={classSettings}>
            <label className="addMore" htmlFor="file">
              {<AddMoreIcon/>}
              <h2>ADD MORE</h2>
              </label>
            <input className="file__label" id="file" type="file" />
        </div>
        </>
    )
    }
}

export default Upload
