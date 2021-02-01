import React, { Component, Fragment } from 'react'


class Child extends Component {
    render() {
        // console.log('renderchild')
        return (
            <Fragment>
                <div>{this.props.number}</div>
            </Fragment>
            
        )
    }
}

export default Child