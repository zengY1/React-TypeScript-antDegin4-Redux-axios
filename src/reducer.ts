import { combineReducers } from 'redux'
import demoStore from './pages/demo/reducer'

export default combineReducers({
    demoStore: demoStore,
})