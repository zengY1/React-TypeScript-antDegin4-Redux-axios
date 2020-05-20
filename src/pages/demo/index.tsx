import * as React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { changeCount, getTestData } from './action';
import { bindActionCreators } from "redux";
import Page from '@components/page'
import './index.less'
class Demo extends React.Component<IProps>{
    // 减
    subtraction = () => {
        const count = this.props.demoStore.count
        this.props.changeCount(count - 1)
    }
    // 加
    add = () => {
        const count = this.props.demoStore.count
        this.props.changeCount(count + 1)
    }
    render() {
        console.log(this.props);

        return (
            <Page>
                <h2>使用Page组件，页面的背景将会是白色的，不然为灰色的</h2>
                <div className='demo'>
                    <Button type="primary" onClick={this.subtraction}>-</Button>
                    <div> {this.props.demoStore.count}</div>
                    <Button type="primary" onClick={this.add}>+</Button>
                </div>
            </Page>
        )
    }

}
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

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
