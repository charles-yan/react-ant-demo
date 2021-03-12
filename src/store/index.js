import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './reducer';
// import thunk from 'redux-thunk'; //需要用到异步请求，需要安装中间件
import createSagaMiddleware from 'redux-saga'
import Immutable from 'immutable';
import sages from './sagas'
const sagaMiddleware =createSagaMiddleware()
const middlewares = [];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState=Immutable.Map();
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
   
    middlewares.push(logger);
  }
// middlewares.push(thunk);
middlewares.push(sagaMiddleware);
const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(
            applyMiddleware(...middlewares)
        )
    );
    sages.forEach(sage => sagaMiddleware.run(sage))
export default store;