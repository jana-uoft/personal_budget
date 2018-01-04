import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from 'redux-persist'
import axiosMiddleware from 'redux-axios-middleware';
import { client, clientOptions } from './axios';
import localForage from 'localforage'
import user from "../reducers/userReducer";
import global from "../reducers/globalReducer";



let storeEnhancers;
if (process.env.NODE_ENV === 'development') {
  storeEnhancers = compose(
    applyMiddleware(
      axiosMiddleware(client, clientOptions),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
} else {
  storeEnhancers = compose(
    applyMiddleware(
      axiosMiddleware(client, clientOptions),
    ),
  )
}


let reducers = {
  user,
  global
}


const config = { key: 'root', storage: localForage }

export const store = createStore(
  persistCombineReducers(config, reducers),
  {},
  storeEnhancers
);


export const persistor = persistStore(store)

