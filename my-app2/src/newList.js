import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { List, Avatar } from 'antd'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

class NewList extends Component {

    render() {
        // 获取 newButton 组件跳转时url带过来的参数，怎么直接拿到值？

        // 方式1：只能通过this.props.location.search的方式来获取参数，为?123,还要自己手动过滤获取
        // console.log(this.props.location.search); // ?123

        // 方式2：/123来获取，但是也不能直接拿到参数
        console.log(this.props);        // search为空，也取不到

        // 方法3：(推荐)通过设置在index.js里的path:'/list/:id'
         

        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
                )}
            />
        )
    }
}

export default NewList
