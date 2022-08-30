import { createStore } from 'redux'
import {reducerTodo} from "./reducers"


let store = createStore (reducerTodo)

store.subscribe(() => console.log(store.getState()))