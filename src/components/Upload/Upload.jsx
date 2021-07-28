import React from 'react'
import AddMoreIcon from './../ikon/AddMoreIcon';


export default function Upload() {
      return (
        <div>
            <label className="addMore" htmlFor="file">
              {<AddMoreIcon/>}
              <h2>ADD MORE</h2>
              </label>
            <input className="file__label" id="file" type="file" />
        </div>
    )
}
