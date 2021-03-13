import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  // 严格模式
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

