import React, { Component } from 'react';
import axios from 'axios';

class LifeCycle extends Component {
    /* 
    React中不能用$ajax发送请求，使用
        axios来发送请求
        npm install axios --save 线上和开发环境都需要发送ajax请求
        npm install xxxxx --save -dev只在开发环境下安装 
    一般发送ajax是放在componentDidMount这个生命周期函数里面去发
        为什么?
        因为把ajax放在其他生命周期函数里面可能会有问题,与SSR有关
        最合适的就是
            componentDidMount
    */


    // handleClick() {
    //     console.log('window click');
    // }

    // componentWillMount() {
    //     window.addEventListener('click', this.handleClick)
    // }

    render() {
        return (
            <div>hello world</div>
        )
    }

    /* 
    生命周期函数使用场景

        页面一加载就给全局添加一些事件,使用componentDidMount也可以
        但是这么绑定事件就会有问题：
            一旦这个组件创建了之后，如果页面上还有其他的组件，或者说这
            个组件被移除掉之后，新的组件显示到了页面上；但是先前那个组件
            往全局添加的事件一直没有被销毁；所以别的组件再挂载到页面上的
            时候，之前的组件绑定的window的全局的事件会影响到其他的组件的
        所以需要之前的组件被从页面上移除的时候，要对window上绑定的事件做
        一个解绑，怎么做？
    */
    
    // componentWillUnmount() {
    //     // 卸载绑定的window全局事件，箭头函数没法清,一般用this.handleClick来移除
    //     window.removeEventListener('click',this.handleClick);
    // }

    componentDidMount() {
        const promise = axios.get('http://www.dell-lee.com/react/api/demo.json')
        promise.then((res) => {
            console.log(res)
        })
    }
    
}

export default LifeCycle;