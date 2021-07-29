import React, { Component } from 'react'
import Block from './Block'
import Acardion from './acardion/Acardion'
import styled from 'styled-components'

const CombineElements = styled.div`
    background: #F9F9F9;
    border-radius: 15px;
`;
class CombineComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            returnComponet: false,
            addBoxShadow: false
        }
        this.returnWrapper = this.returnWrapper.bind(this)
    }
    returnWrapper() {
        this.setState(({returnComponet, addBoxShadow}) => ({
            returnComponet: !returnComponet,
            addBoxShadow: !addBoxShadow
        }))
    }
    render() {
        const {returnComponet,addBoxShadow} = this.state
        let block;
        let addShadow = ''

        if(returnComponet) {
            block = <Block componentBlock={this.props.mainComponentBlock}/>
        }
        if(addBoxShadow) {
            addShadow += ' add-box-shadow'
        }
    return (
        <CombineElements className={addShadow}> 
            <Acardion onClick={this.returnWrapper} icon={this.props.icon} title={this.props.title} level={this.props.level}/>
            {block}
        </CombineElements>
    )
}
}
export default CombineComponents
