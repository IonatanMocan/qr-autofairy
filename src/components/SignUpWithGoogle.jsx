import React, { Component } from 'react'
import styled from 'styled-components'
import SignUpWithGoogleImage from '../images/SignUpWithGoogle.png'

// 1. create client_id look in index.hmtl
// 2.for get more info https://developers.google.com/identity/sign-in/web/reference#googleusergetbasicprofile
const WrapperButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
    button {
        margin:0 auto;
        border: none;
        background-color: transparent;
    }` 
class SignUpWithGoogle extends Component {
    state = {
        name: null
      }
      componentDidMount() {
        const _onInit = auth2 => {
          console.log('init OK', auth2)
        }
        const _onError = err => {
          console.log('error', err)
        }
        window.gapi.load('auth2', function() {
          window.gapi.auth2
            .init({
              client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
            .then(_onInit, _onError)
        })
      }
      signIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
          const profile = googleUser.getBasicProfile()
          this.setState({
            name: profile.getGivenName()
          })
        })
      }
      render() {
        const { name } = this.state
        console.log(name)
        return(
            <WrapperButton>
            <button onClick={this.signIn}><img src={SignUpWithGoogleImage} alt="button" /></button>
            </WrapperButton>
        ) 
      }
}
export default SignUpWithGoogle
