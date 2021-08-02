import React, { Component } from 'react'
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
const GoogleButtonWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    margin: 40px 0;
`
const responseGoogle = (response) => {
  console.log(response);
}
class SignUpWithGoogle extends Component {
    render() {
      return (
            <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
      )
    }
}
  
  export default SignUpWithGoogle
  