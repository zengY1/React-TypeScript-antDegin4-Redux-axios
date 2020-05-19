import * as React from 'react'
import { Layout, ConfigProvider } from 'antd';
import Routes from '../../routes'
import Sider from '@components/layout/sider'
import HeaderComponent from '@components/layout/header'
import Footer from '@components/layout/footer'
import zhCN from 'antd/es/locale/zh_CN';
import './index.less'

const { Content } = Layout
interface IState {
    authorized?: boolean,
    collapsed?: boolean
}
class DivLayout extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            collapsed: false
        }
    }
    logout = () => {
        console.log('退出登陆')
        window.localStorage.clear()
        this.props.history.push('/login')
    }
    changePassWord = () => {
        console.log('修改密码')
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        const { collapsed } = this.state

        /*authorized 路由守卫，authorized为false，页面将跳转到登陆页面*/
        const authorized: boolean = true
        console.log('auth', authorized)
        return (<ConfigProvider locale={zhCN}>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsed={collapsed} />
                <Layout>
                    <HeaderComponent getLogout={this.logout} changePassWord={this.changePassWord} toggleCollapsed={this.toggleCollapsed} collapsed={collapsed} />
                    <Content className='layout-content'>
                        {Routes(authorized)}
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </ConfigProvider>)
    }
}

export default DivLayout