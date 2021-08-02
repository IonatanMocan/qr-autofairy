import React, {Component} from 'react';
import Slider from "react-slick";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSale from '../components/HeroSale';
import './draft/SliderStyle/slick-theme.css';
import './draft/SliderStyle/slick.css';
import Qrcode from '../images/Qrcode.svg';
import AutofairyLogo from '../images/AutofairyLogo';
import BlueButton from '../components/BlueButton';
import { Link } from 'react-router-dom';
import ProgresPage, { ProgressBarSecondPage } from '../components/ProgresPage';

export function Block() {
  return (
    <div className="qr-active">
      <h2>FOR SALE</h2>
      <img src={Qrcode} alt="qr-code" />
      <div className="qr-active__footer">
        <AutofairyLogo/>
        <h4>One scan to you next dream vehicle</h4>
      </div>
</div>
  )
}
export function Block1() {
  return (
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
  )
}

export function Block2() {
  return (
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
  )
}
export function Block3() {
  return (
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
  )
}



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
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1
          }
        }
      ]
    }
    let settingsBig = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    }
  return (
    <>
      <Header happend="LOGIN / SIGNUP" />
        <HeroSale>
          <h1>
            ALMOST DONE, <br />
            PICK A DESIGN THAT FITS YOUR NEED
          </h1>
          <ProgressBarSecondPage>
            <ProgresPage/>
            </ProgressBarSecondPage>
        </HeroSale>
        <Slider className="qr-wrapper" asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} {...settings}>
            <Block/>
            <Block1/>
            <Block2/>
            <Block3/>
        </Slider>
          <Slider className="big-blocks" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} {...settingsBig}>
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
      <Link className="link" to='/print-and-share'>
            <BlueButton text='NEXT' />
          </Link>
      <Footer />
    </>
  );
  }
};

export default Design;
