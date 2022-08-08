import React, { Component, Fragment } from 'react'
// import Child from './child'
// 生命周期函数指的是组件在某一时刻会自动执行的函数

class Counter extends Component {

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.state = {
            counter:1
        }
    }

    handleBtnClick() {
        const newCounter = this.state.counter + 1;
        console.log(this.divElem.innerHTML);
        // setState 是异步的
        // this.setState({
        //     counter: newCounter
        // })
        this.setState(() => {
            return {
                counter: newCounter
            }
        }, () => {
            console.log(this.divElem.innerHTML);
        })
    }

    render() {
        // ref 写在html标签上，获取的是dom节点
        // ref 写在组件标签上，获取的是组件的js实例
        return (
            <Fragment>
                <button
                    onClick={this.handleBtnClick}
                    // ref={(button) => {this.buttonElem = button}}
                >
                    增加
                </button>
                <div ref={(div) => {this.divElem = div}}>{this.state.counter}</div>
            </Fragment>
        )
    }
}

export default Counter