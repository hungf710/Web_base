import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import rootReducers from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
const sagaMiddleware = createSagaMiddleware()
var store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
