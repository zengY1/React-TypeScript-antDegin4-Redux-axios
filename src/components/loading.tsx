import * as React from 'react';
import { Spin } from 'antd'


export default (props: any) => {


    const { size = 'default' } = props

    return (
        <div style={{
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Spin size={size} />
        </div>
    )

}