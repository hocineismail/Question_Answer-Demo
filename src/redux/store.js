import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import thunk from "redux-thunk";

//import Reducers

import componentsReducers from "./reducers/componentsReducers";
import adminsReducers from "./reducers/adminsReducers";
import questionsReducers from "./reducers/questionsReducers";
import signsReducers from "./reducers/signsReducers";
import answersReducers from "./reducers/answersReducers";
import userReducers from "./reducers/userReducers";
import followerReducers from "./reducers/followerReducers";
import staticsReducers from "./reducers/staticsReducers";
import editorReducers from "./reducers/editorReducers";
import categoriesReducers from "./reducers/categoriesReducers";

const combinedReducers = combineReducers({
  componentsReducers,
  adminsReducers,
  questionsReducers,
  answersReducers,
  signsReducers,
  userReducers,
  followerReducers,
  staticsReducers,
  editorReducers,
  categoriesReducers,
});

//here is something is changed after new version of redux i
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
