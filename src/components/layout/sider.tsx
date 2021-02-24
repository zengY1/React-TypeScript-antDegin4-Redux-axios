import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    HomeOutlined,
    FileSearchOutlined,
    FrownOutlined
} from '@ant-design/icons';

const { Sider } = Layout
const { Item, SubMenu } = Menu

interface ISiderProps extends RouteComponentProps {
    collapsed?: boolean,

}
interface IState {
    selectedKeys?: Array<string>,
    openKeys?: Array<string>
}
interface Path { key: string, title: string, path: string }
const menuList = [
    { key: '1', title: '首页', path: '/home', icon: <HomeOutlined /> },
    {
        key: '2', title: 'demo', icon: <FileSearchOutlined />,
        children: [
            {
                key: '2-1', title: 'demo', path: '/demo', icon: <FrownOutlined />
            }]
    },
    { key: '3', title: '管理', path: '/admin', icon: <HomeOutlined /> },
]

export default (props: any) => {
    const [selectedKeys, setSelectedKeys] = useState(['1'])
    const [openKeys, setOpenKeys] = useState(['1'])
    /* 根据浏览器当前的URL，判断打开并选中当前的menu
       */
    useEffect(() => {
        console.log('props', props)
        const currentPath = props.props.location.pathname
        menuList.forEach((it) => {
            if (it.children) {
                const c = it.children.findIndex((cit) => cit.path === currentPath)
                if (c > -1) {
                    setSelectedKeys([it.children[c].key])
                }
            } else {
                if (it.path === currentPath) {
                    setOpenKeys([it.key])
                }
            }
        })
    }, [])


    // menu的点击事件，跳转到相应的地址
    const menuItemClick = (item: any) => {
        let toPath: Path = { key: '', title: '', path: '' }
        menuList.forEach((it) => {
            if (it.children) {
                const c = it.children.findIndex((cit) => cit.key === item.key)
                if (c > -1) {
                    toPath = it.children[c]
                }
            } else {
                if (it.key === item.key) {
                    toPath = it
                }
            }
        })
        props.props.history.push(toPath.path)
    }

    const { collapsed } = props

    return (<Sider
        trigger={null}
        collapsible
        collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKeys} defaultOpenKeys={openKeys} onClick={menuItemClick}>
            {
                menuList.map(m => m.children ?
                    <SubMenu
                        key={m.key}
                        icon={m.icon}
                        title={<span>{m.title}</span>}>
                        {
                            m.children.map(mc => <Item key={mc.key} icon={mc.icon}>{mc.title}</Item>)
                        }
                    </SubMenu> :
                    <Item key={m.key} icon={m.icon}>{m.title}</Item>
                )
            }
        </Menu>
    </Sider>)
}



