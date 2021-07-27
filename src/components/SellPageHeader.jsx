import React, { Component } from 'react'

class SellPageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="sell-page-header">
                <div className="sell-page-header__wrapper">
                    <div className="secondary-title">
                        <h1 className="secondary-title">SELL CARS, <br /> SAFE, QUICK, EFFORTLESS</h1>
                    </div>
                    <div className="progres">
                        <div className="progres__item">
                                <span> 1</span>
                                <h2>DRAFT</h2>                
                        </div>
                        <div className="progres__item ">
                            <span>2</span>
                            <h2>DESIGN</h2> 
                        </div>
                        <div className="progres__item ">
                            <span>3</span>
                            <h2>PRINT & SHARE</h2> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SellPageHeader
