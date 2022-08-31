
import { func } from 'prop-types'
import { combineReducers } from 'redux'
import todoList from "../components/todoList.json"
import {setVisibilityFilter, addTodo, changeTodos, deleteTodo, changeDone } from "./actions" 

 const todoState = todoList
 const filter = false


 function reducerTodo(state = todoState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {...state,
        id:Math.random(),
        name: action.name,
        description: action.description,
        completed: action.completed
      } 
      case 'DELETE_TODO':
        const index = state.findIndex((data) => data.id === action.id);
        return state.splice(index, 1);      
      case 'CHANGE_TODO':
       return state.find((data) => {
          if (data.id === action.id) {
            data.name = action.name;
            data.descripcion = action.descripcion
          }})
        
      case 'CHANGE_DONE':
        return  state.find((data) => {
            if (data.id === action.id) {
              if (data.completed === true) {
                data.completed = false;
              } else {
                data.completed = true;
              }
            }
          });  
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

 