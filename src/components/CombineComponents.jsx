import React, { Component } from 'react'
import Block from './Block'
import Acardion from './acardion/Acardion'

class CombineComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            returnComponet: false
        }
        this.returnWrapper = this.returnWrapper.bind(this)
    }
    returnWrapper() {
        this.setState(({returnComponet}) => ({
            returnComponet: !returnComponet
        }))
    }
    render() {
        const {returnComponet} = this.state
        let block;

        if(returnComponet) {
            block = <Block componentBlock={this.props.mainComponentBlock}/>
        }
    return (
        <>
            <Acardion onClick={this.returnWrapper} icon={this.props.icon} title={this.props.title} level={this.props.level}/>
            {block}
        </>
    )
}
}
export default CombineComponents
