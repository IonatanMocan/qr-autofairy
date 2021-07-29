import React from 'react'
import AddMoreIcon from './../ikon/AddMoreIcon';
import styled from 'styled-components';

const UpploadWrapper = styled.div`
width: 100%;
padding: 38px;
background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`;
export default function Upload() {
      return (
        <UpploadWrapper>
            <label className="addMore" htmlFor="file">
              {<AddMoreIcon/>}
              <h2>ADD MORE</h2>
              </label>
            <input className="file__label" id="file" type="file" />
        </UpploadWrapper>
    )
}
