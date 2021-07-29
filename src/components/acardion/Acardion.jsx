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
    padding: 15px 0;
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
    .acordion-level {
        color:#0069A4;
        transition: all .5s ease-in-out;
    }
    .acordion-level--active {
        color: #E67D1D;
    }

`;
export default class Acardion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrow: false,
            changeColor: false,
            addTransporent: false
        }
        this.acordionEvent = this.acordionEvent.bind(this)
    }
    acordionEvent() {
        this.setState(({arrow, changeColor,addTransporent}) =>({
            arrow: !arrow,
            changeColor: !changeColor,
            addTransporent: !addTransporent
        }))
    }
    render() {
        const {arrow, changeColor, addTransporent} = this.state
        let arrows = 'arrow',
            colors = 'acordion-level',
            transparent = ''


        if(arrow) {
            arrows += ' arrow--active'
        }
        if(changeColor) {
            colors += ' acordion-level--active'
        }
        if(addTransporent) {
            transparent += ' add-transporent'
        }
        
    return (
        <div onClick={this.acordionEvent} >
            <AcordionWrapper onClick={this.props.onClick} className={transparent}>
                <ArrowIcon classNames={arrows} />
                <div>
                    {this.props.icon}
                    <h3>{this.props.title}</h3>
                </div>
                    <span class={colors}>{this.props.level} complete</span>
            </AcordionWrapper>
        </div>
    )
    }
}
