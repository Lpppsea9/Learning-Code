import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleItemclick = this.handleItemclick.bind(this)
    }

    // 删除todoitem
    handleItemclick() {
        // 改变父组件中list数据
        // 子组件想要和父组件通信，它要调用父组件传递过来的方法
        // this.props.deleteFunction(this.props.index)
        const { deleteFunction, index } = this.props;
        // ！！这是去调用父组件的方法，去改变父组件的数据(不能直接改变)
        deleteFunction(index)
        console.log(this);
    }

    render() {
        // 子组件通过this.props的属性，从父组件接受传递过来的值

        // 下面两个等价
        // const { content } = this.props; 
        // const content = this.props.content

        const { content } = this.props;
        return <li onClick={this.handleItemclick}>{content}</li>
    }
}

export default TodoItem;