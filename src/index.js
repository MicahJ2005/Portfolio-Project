import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { call, put, takeEvery} from 'redux-saga/effects';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('RENDER_PROJECT', getProjectsList);
}

function* getProjectsList(action){
    try {
      const response = yield call(axios.get, '/projects')
      console.log('getProjectsList api response', response);
      yield put(({ type: 'SET_PROJECTS', payload: response.data}))
      
    }
    catch (error) {
      console.log('error with getting reques', error);
      
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projectReducer = (state = [], action) => {
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
        projectReducer,
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
