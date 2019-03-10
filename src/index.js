import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, takeLatest, put as dispatch } from 'redux-saga/effects';

import axios from 'axios';

// Saga for fetching project data from the server & updating the store
function* fetchProjects() {

    const response = yield axios.get('/portfolio');
    yield dispatch({type:'SET_PROJECTS', payload: response.data});
}

function* fetchTags() {
    const response = yield axios.get('/tags');
    yield dispatch({type:'SET_TAGS', payload: response.data});
}

// Create the rootSaga generator function
function* rootSaga() {

    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    // every single project instance will call this action,
    // so we only want to take the latest to fetch tags.
    yield takeLatest('FETCH_TAGS', fetchTags);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
