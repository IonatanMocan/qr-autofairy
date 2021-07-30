import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import './draft/SliderStyle/slick-theme.css';
import './draft/SliderStyle/slick.css'
import Qrcode from '../images/Qrcode.svg';
import AutofairyLogo from '../images/AutofairyLogo';
import BlueButton from '../components/BlueButton'
import { Link } from 'react-router-dom';
import ProgresPage from '../components/ProgresPage';
const DesignPage = styled.div``;

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    }
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2

    });
  }
  render() {
  return (
    <>
      <Header />
      <DesignPage>
        <HeroSale>
          <h1>
            ALMOST DONE, <br />
            PICK A DESIGN THAT FITS YOUR NEED
          </h1>
          <ProgresPage lineDefault/>
        </HeroSale>
        <Slider className="qr-wrapper" asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
            <div className="qr-active">
                <h2>FOR SALE</h2>
                <img src={Qrcode} alt="qr-code" />
                <div className="qr-active__footer">
                  <AutofairyLogo/>
                  <h4>One scan to you next dream vehicle</h4>
                </div>
            </div>
            <div className="qr-block block-1">
                <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong>
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
            <div className="qr-block block-2">
                <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong>
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
            <div className="qr-block block-3">
                <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong> 
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
        </Slider>
          <Slider className="big-blocks" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} slidesToShow={1} swipeToSlide={false}>
            <div className="qr-active qr-active__big">
                <h2>FOR SALE</h2>
                <img src={Qrcode} alt="qr-code" />
                <div className="qr-active__footer">
                  <AutofairyLogo/>
                  <h4>One scan to you next dream vehicle</h4>
                </div>
            </div>
            <div className="qr-block block-1 qr-block__big">
                <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong>
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
            <div className="qr-block block-2 qr-block__big">
              <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong>
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
            <div className="qr-block block-3 qr-block__big">
                <h2>For Sale</h2>
                <div className="qr-info">
                  <img src={Qrcode} alt="" />
                  <div className="qr-descr">
                    <strong>SCAN QR CODE TO VISIT THE WEB PAGE</strong> 
                    <h5>
                    MODEL: KIA <br />
                    MAKE: SEDONA <br />
                    YEAR: 2019 <br />
                    </h5>
                    <a href="tel:+604-353-0001">604-353-0001</a>
                  </div>
                </div>
            </div>
          </Slider>
      </DesignPage>
      <Link to='/print-and-share'>
            <BlueButton text='SALE WITH US' />
          </Link>
      <Footer />
    </>
  );
  }
};

export default Design;
