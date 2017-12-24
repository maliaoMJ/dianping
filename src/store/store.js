import { createStore } from 'redux'
import appReducers from '../reducers/reducers'
// const Store = createStore(appReducers) 下面写方便调试
const Store = createStore(appReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store