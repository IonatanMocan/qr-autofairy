import React, { Component } from 'react'
import Acardion from '../acardion/Acardion'
import UploadIcon from './../ikon/UploadIcon';
import AddMoreIcon from './../ikon/AddMoreIcon';

class Upload extends Component {
    constructor(props) {
      super(props)
      this.state = {
        settings: false,
        activeWrapper: false
      }
      this.addSettings = this.addSettings.bind(this)
    }
    addSettings() {
      this.setState(({settings, activeWrapper}) => ({
        settings: !settings,
        activeWrapper: !activeWrapper
    }))
    }
    render() {
      const {settings, activeWrapper} = this.state
      let classSettings = 'select'
      let activeClassWrapper = 'edtit-wrapper'

      if(settings) {
        classSettings += ' select--active'

      }

      if(activeWrapper) {
        activeClassWrapper += ' edtit-wrapper--active'
      }
      return (
        <div className={activeClassWrapper}>
        <Acardion title="Upload photos" level='100%' icon={<UploadIcon/>} addSettings={this.addSettings} />
        <div className={classSettings}>
            <label className="addMore" htmlFor="file">
              {<AddMoreIcon/>}
              <h2>ADD MORE</h2>
              </label>
            <input className="file__label" id="file" type="file" />
        </div>
        </div>
    )
    }
}

export default Upload
