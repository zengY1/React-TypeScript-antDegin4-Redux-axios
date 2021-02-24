import * as React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { changeCount, getTestData } from './action';
import { bindActionCreators } from "redux";
import Page from '@components/page'
import './index.less'
let mapStateToProps = (state: any) => {
    return {
        demoStore: state.demoStore
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        changeCount: changeCount,
        getTestData: getTestData
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)((props: any) => {
    // 减
    const subtraction = () => {
        const count = props.demoStore.count
        props.changeCount(count - 1)
    }
    // 加
    const add = () => {
        const count = props.demoStore.count
        props.changeCount(count + 1)
    }
    return (
        <Page>
            <h2>使用Page组件，页面的背景将会是白色的，不然为灰色的</h2>
            <div className='demo'>
                <Button type="primary" onClick={subtraction}>-</Button>
                <div> {props.demoStore.count}</div>
                <Button type="primary" onClick={add}>+</Button>
            </div>
        </Page>
    )
});
