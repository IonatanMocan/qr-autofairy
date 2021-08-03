import React, { Component } from 'react'
import styled from 'styled-components'
import SignInWithGoogleIcon from '../images/SignInWithGoogleIcon'

// 1. create client_id look in index.hmtl localhost:3000, qr-autofairy.netlify.app
// 2.for get more info https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
const WrapperButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
    button {
        margin:0 auto;
        border: none;
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        width: 321px;
        height: 58px;
        background-color: #E54834;
        svg {
            width: 30px;
            height: 30px;
        }
        span {
          width: max-content;
          color: white;
          font-family: 'Roboto';
          font-size: 18px;
        }
    }` 
class SignUpWithGoogle extends Component {
      render() {
        return(
            <WrapperButton>
            <button>
              <SignInWithGoogleIcon/>
              <span>Sign Up With Google</span>
            </button>
            </WrapperButton>
        ) 
      }
}
export default SignUpWithGoogle
