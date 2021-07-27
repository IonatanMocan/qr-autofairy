import React, {Component} from 'react'
import './styles.css'
import ArrowIcon from './../ikon/ArrowIcon';


class Acardion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            extend: false
        }
        this.ExtendAcordion = this.ExtendAcordion.bind(this)
    }
    ExtendAcordion() {
        this.setState(({extend}) => ({
            extend: !extend

        }))
    }
    render() {
        const {extend} = this.state
        let classNames = 'arrow'

        if(extend) {
            classNames += ' arrow-active'
        }
    return (
        <div onClick={this.props.addSettings} className="acardion">
            <div onClick={this.ExtendAcordion} className="acardion__settings">
                <div className="acardion__arrow">
                    <ArrowIcon classNames={classNames}/>
                </div>
            <div className="acardion__descripteon">
                {this.props.icon}
                <span>{this.props.title}</span>
            </div>
            <div className="acardion__complete">
                <span>{this.props.level} complete</span>
            </div>
            </div>
        </div>
    )
    }
}

export default Acardion
