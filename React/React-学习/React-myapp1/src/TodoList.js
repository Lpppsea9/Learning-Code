import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props);

        // 把事件绑定放到 constructor 里来做
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)

        this.state = {
            inputValue: '',
            list:[]
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleKeyUp(e) {
        if (e.keyCode === 13 && e.target.value !== '') {
            // this.state.inputValue
            const list = [...this.state.list, this.state.inputValue]
            this.setState({
                list, // 直接写list(es6写法)
                inputValue: ''
            })
        }
    }

    // 删除li标签的函数(可以传递给子组件)
    handleItemClick(index) {
        const list = [...this.state.list]
        list.splice(index, 1);
        this.setState({list})
    }

    // 循环展示出li标签
    getListItems() {
        // 父子组件的概念
        // 父组件通过属性的形式向子组件传值
        return this.state.list.map((value, index) => {
            return (
                <TodoItem
                    content={value}
                    index={index}
                    key={index}
                    deleteFunction={this.handleItemClick}
                />
            )
        })
    }

    // 在render函数里，this指向的是这个组件
    render() {
        return (
            <Fragment>
                {/* 这是JSX中的注释 */}
                <label htmlFor="myinput">请输入信息：</label>
                <input
                    id="myinput"
                    className="input"
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    value={this.state.inputValue}
                />
                <ul>
                    {this.getListItems()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList