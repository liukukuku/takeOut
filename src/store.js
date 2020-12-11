import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reduces from '@/reducer'
import { persistReducer } from 'redux-persist' // 数据持久化
// import storage from 'redux-persist/lib/storage' // localstorage
import sessionStorage from 'redux-persist/lib/storage/session' // session
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// 我要对哪些 state 做数据持久化
const rootPersistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['Reducer_getrestaurants','Login',"List_Address"], // 白名单
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  persistReducer(rootPersistConfig, combineReducers(reduces)), 
  composeEnhancers(applyMiddleware(promise, thunk))
)

export default store







