import * as React from 'react'
import './index.less'

export default (props: any) => {
    console.log('props', props)
    return (
        <div className='page'>
            {props.children}
        </div>
    )
}