import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  resumeReducer,
  newresumeReducer,
  resumesReducer,
} from './reducers/ResumeReducers';

const reducer = combineReducers({
  resumes: resumesReducer,

  newresume: newresumeReducer,
  resume: resumeReducer,

  // userDetails: userDetailsReducer,
});

const middlware = [thunk];
const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middlware)),
);

export default store;
