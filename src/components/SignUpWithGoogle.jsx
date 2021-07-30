import React from 'react'
import styled from 'styled-components';
import SignUpWithGoogleICon from '../images/SignUpWithGoogle.png';

const GoogleButtonWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    margin: 40px 0;
`
  function SignUpWithGoogle() {
      return (
        <GoogleButtonWrapper>
            <img src={SignUpWithGoogleICon} alt="" />
        </GoogleButtonWrapper>
  );
}
  
  export default SignUpWithGoogle
  