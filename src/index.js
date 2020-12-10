import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import store from './store'
import Route from '@/router'
import '@/styles/css/reset.css'
import '@/styles/js/rem'
import '@/styles/font_ykihjjzdz1l/iconfont.css'
import '@/styles/index.less'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Route />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
