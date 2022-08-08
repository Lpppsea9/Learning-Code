import React, { Component } from 'react'
import ReactDom from 'react-dom'
// import Counter from './counter'
// import LifeCycle from './lifecycle'

// AntDesign测试 
import 'antd/dist/antd.css'
import Antdtest from './antdtest'

// 路由及按钮测试
import { BrowserRouter, Route, Link } from 'react-router-dom'
import NewButton from './nesButton'
import NewList from './newList'


class Entry extends Component {

    render() {
        return (
            // BrowserRouter是定义一个路由,内部只能有一个元素
            // Route是一个路由项,什么时候显示什么组件是通过route设置的
            // Link 
            <BrowserRouter>
                <div>
                    {/* 
                        list这个路径下, 如果后面有任何的123的参数,
                        都会放到id这个变量里面去 
                        /list/123   
                    */}
                    <Route path='/list/:id' component={NewList} />
                    <Route path='/button' component={NewButton}/>
                </div>
            </BrowserRouter>
        )
    }
}


ReactDom.render(<Entry />,document.getElementById('root'))