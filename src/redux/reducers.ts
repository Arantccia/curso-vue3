
import { combineReducers } from 'redux'
import todoList from "../components/todoList.json"
import {setVisibilityFilter, addTodo, changeTodos, deleteTodo } from "./actions" 

 const todoState = todoList


 function reducerTodo(state = todoState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state 
      case 'DELETE_TODO':
        return state 
      case 'CHANGE_TODO':
        return state 
      case 'SET_VISIBILITY_FILTER':
        return state 
      default:
        return state
    }
  }

/*   import * as reducers from './reducers'

  const todoApp = combineReducers(reducers) */

 /*  const todoApp = combineReducers({
    visibilityFilter,
    todos
  })
  
  export default todoApp */

  export {reducerTodo}