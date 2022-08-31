import { createStore,compose, applyMiddleware  } from 'redux'
import todoApp from "./reducers"
import thunk from 'redux-thunk';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      __REDUX_DEVTOOLS_EXTENSION__
    }
  }
const store = createStore (todoApp, 
    window. __REDUX_DEVTOOLS_EXTENSION_COMPOSE__&& window. __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)),
    )

store.subscribe(() => console.log(store.getState()))