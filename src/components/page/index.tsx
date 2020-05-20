import * as React from 'react'
import './index.less'
interface itemType{
    item?:any
}
export default (props: any) => {
    console.log('props', props)
    return (
        <div className='page'>
            {props.children}
        </div>
    )
}