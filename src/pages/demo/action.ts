import {listGetRole} from './services'
export let changeCount = (count: any) => async (dispatch: any) => {
    dispatch({ type: 'change_count', saveData: count });
};
export let getTestData = () => async (dispatch: any) => {
    const data =await listGetRole()
    console.log('获取数据data',data)
}