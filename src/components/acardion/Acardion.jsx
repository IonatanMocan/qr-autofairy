import React, {Component} from 'react'
import styled from 'styled-components';
import ArrowIcon from '../ikon/ArrowIcon';

const AcordionWrapper = styled.div`

display: flex;
background-color: #DFEAFC;
justify-content: space-around;
align-items: center;
margin: 40px 0;
border-radius: 10px;
padding: 12px 0;
font-family: 'Roboto', sans-serif;
div {
    display: flex;
    align-items: center;
    width: 330px;
    justify-content: center;
}
h3 {
    font-family: 'Roboto', sans-serif;
    line-height: 94%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #6A5D5D;
    margin-left: 40px;
}
span {
    color:#0069A4;
}

`;
export default class Acardion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrow: false
        }
        this.turnArrow = this.turnArrow.bind(this)
    }
    turnArrow() {
        this.setState(({arrow}) =>({
            arrow: !arrow
        }))
    }
    render() {
        const {arrow} = this.state
        let arrows = 'arrow'

        if(arrow) {
            arrows += ' arrow--active'
        }
    return (
        <div onClick={this.turnArrow}>
            <AcordionWrapper onClick={this.props.onClick} className="acardion">
                <ArrowIcon classNames={arrows} />
                <div>
                    {this.props.icon}
                    <h3>{this.props.title}</h3>
                </div>
                    <span>{this.props.level} complete</span>
            </AcordionWrapper>
        </div>
    )
    }
}
