import React, { useEffect, useState } from 'react'
import { Layout, ConfigProvider } from 'antd';
import Routes from '../../routes'
import Sider from '@components/layout/sider'
import HeaderComponent from '@components/layout/header'
import Footer from '@components/layout/footer'
import zhCN from 'antd/es/locale/zh_CN';
import './index.less'

const { Content } = Layout

export default (props: any) => {
    const [collapsed, setCollapsed] = useState(false)

    const logout = () => {
        console.log('退出登陆')
        window.localStorage.clear()
        props.history.push('/login')
    }
    const changePassWord = () => {
        console.log('修改密码')
    }
    const toggleCollapsed = () => {
        setCollapsed(x => !x)
    }



    /*authorized 路由守卫，authorized为false，页面将跳转到登陆页面*/
    const authorized: boolean = localStorage.getItem('auth') ? true : false
    console.log('auth', authorized)


    return (<ConfigProvider locale={zhCN}>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={collapsed} props={props} />
            <Layout>
                <HeaderComponent getLogout={logout} changePassWord={changePassWord} toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
                <Content className='layout-content'>
                    {Routes(authorized)}
                </Content>
                <Footer />
            </Layout>
        </Layout>
    </ConfigProvider>)

}

