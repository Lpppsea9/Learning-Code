import React, { Component, Fragment } from 'react'
import Son from './Son'


class Father extends Component {
    constructor(props) {
        super(props);

        this.state ={
            ccc:"Lppp"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name) {
        const ccc = this.state.ccc + name
        this.setState({
            ccc:ccc
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    这是父组件
                </div>
                <div>
                    <Son
                        content={this.state.ccc}
                        childClick={this.handleClick}
                    />
                </div>
            </Fragment>
        )
    }
}

export default Father