import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import{createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import Routes from './routes';
import rootReducer from './reducers';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
</Provider>,
 document.getElementById('root'));

