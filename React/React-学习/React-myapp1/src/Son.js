import React, { Component, Fragment } from 'react'

class Son extends Component {
    constructor(props) {
        super(props);
        this.childClick = this.childClick.bind(this)
        this.state = {

        }
    };

    
    
    childClick() {
        const {childClick} = this.props
        childClick("kkk")
    }

    render() {
        const {content} = this.props
        return (
            <Fragment>
                <div onClick={this.childClick}>{content}</div>
            </Fragment>
        )
    }
}

export default Son
