import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // para que se pueda ver en el navegador  
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;


// INSTALAR npm i redux-devtools-extension