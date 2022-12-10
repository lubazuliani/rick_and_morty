import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//Routing
import { BrowserRouter } from 'react-router-dom'
//React-Redux
import store from './redux/store';
import  { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
