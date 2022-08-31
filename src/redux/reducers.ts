
import { func } from 'prop-types'
import { combineReducers } from 'redux'
import todoList from "../components/todoList.json"
import {setVisibilityFilter, addTodo, changeTodos, deleteTodo } from "./actions" 

 const todoState = todoList
 const filter = false


 function reducerTodo(state = todoState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return state 
      case 'DELETE_TODO':
        const index = state.findIndex((data) => data.id === action.id);
        state.splice(index, 1);
        return state 
      case 'CHANGE_TODO':
        return state 
      case 'SET_VISIBILITY_FILTER':
        return state 
      default:
        return state
    }
  }

  function visibilityFilter(state = filter, action){
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter 
       
        default:
          return state
      }
  }

/*   import * as reducers from './reducers'

  const todoApp = combineReducers(reducers) */

  const todoApp = combineReducers({
    visibilityFilter,
    reducerTodo
  })
  
  export default todoApp 

 