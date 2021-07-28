import React from 'react'
import '../main.css'


export default  function Contact() {
      return (
        <div className="select__container contacts">
                  <div className="select__wrapper">
                      <input autoComplete="true" className="select__label" placeholder="Name" type="text" />
                      <input autoComplete="true"className="select__label" placeholder="Phone Number" type="number" />
                  </div>
                  <div className="select__wrapper">
                      <input autoComplete="true" className="select__label" placeholder="Preferred Time for Call" type="text" />
                      <input autoComplete="true" className="select__label" placeholder="Email" type="email" />
                  </div>
          </div>
    )
}
