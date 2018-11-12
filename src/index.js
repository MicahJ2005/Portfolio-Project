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

//  rootSaga generator function is getting calls from other js file dispatches
function* rootSaga() {
    yield takeEvery('RENDER_PROJECT', getProjectsList);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('ADD_PROJECT', addProject);
    // yield takeEvery('RENDER_TAG', getTag);
}
    //unused function
// function* getTag(action){
//     try {
//       const response = yield call(axios.get, '/projects/tags')
//       console.log('getTAG api response', action.payload);
//       yield put(({ type: 'SET_TAGS', payload: response.data}))
//       yield put(({ type: 'RENDER_PROJECT', payload: response.data}))
      
//     }
//     catch (error) {
//       console.log('error with getting reques', error);
      
//     }
//   }

/// getProjectsList is used to call the project list from my DB and send response to 'SET_PROJECTS'
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

  //// deleteProject is deleting a project from the DB, based on the action.payload id (passed from the js dispatch)
  /// once call is completed 'RENDER_PROJECT' is called and the project list is re-rendered
function* deleteProject(action){
    try{
        console.log('deleteProject action', action.payload);
        
        const response = yield call(axios.delete, `/projects/${action.payload}`)
        console.log('delete response', response);
        
        yield put(({type: 'RENDER_PROJECT'}))
        
    }
    catch (error) {
        console.log('error with delete Projects', error);
        
    }
}

///addProject is adding a new project to the DB, based on the information we received from 
// the form dispatch. Once the DB is updated succesfully, 'RENDER_PROJECT' will re-render everything to the DOM
function* addProject(action){
    console.log('adding this to DB', action.payload);
    
    try{
        yield call(axios.post, '/projects', action.payload)
        alert('Successfully Added New Project to Database')
        yield put({ type: 'RENDER_PROJECT' });
    }
    catch (error) {
        alert('DataBase could not be found. Check your routes')
        console.log('error on plant POST', error);
        
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

// Did not need this premade reducer as my form selector accomplished this 
// const tagsReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_TAGS':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projectReducer,
        // tagsReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
