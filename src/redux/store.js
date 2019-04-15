/**
 * 如何提交 action 来描述 ‘发生了什么’， 使用 action 创建函数 来返回 action
 * 使用 reducers 根据 action 更新 state
 * store 就是把他们联系到一起的对象
 * 
 * 维持应用的 state
 * 提供 getState() 方法获取 state
 * 提供 dispatch(action) 触发reducers方法更新 state
 * 通过 subscribe(listener) 注册监听器
 * 通过 subscribe(listener) 返回的函数注销监听器
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from './reducers/reducers.js'


let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store