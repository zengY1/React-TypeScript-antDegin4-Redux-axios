import * as React from 'react'
import { Layout, Popover } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import './layout.less'

const { Header } = Layout
interface HProps {
    props?: any,
    getLogout?: () => void,
    changePassWord?: () => void,
    toggleCollapsed?: () => void,
    collapsed?: boolean
}
export default (props: any) => {

    const { collapsed } = props

    return (<Header style={{
        background: '#fff',
        padding: 0,
        display: 'flex',
        alignItems: 'center'
    }}>
        <div style={{ flex: '1 1 0' }}>
            <div onClick={props.toggleCollapsed}>
                {
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
            </div>
        </div>
        <div style={{ paddingRight: 12 }}>
            <Popover trigger="click" placement="bottomRight" content={
                <div className="user-menu">
                    <div onClick={props.changePassWord}>修改密码</div>
                    <div onClick={props.getLogout}>退出登录</div>
                </div>
            }><div>
                    <UserOutlined />Users
                    </div>
            </Popover>
        </div>
    </Header>)
}


