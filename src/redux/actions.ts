

export const addTodo = (name:string, description:string = 'pdt', completed: boolean = false) => {
  return {
    type: 'ADD_TODO',
    id: Math.random(),
    name: name ,
    descripcion: description,
    completed: completed
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const changeTodo = (obj: {id:number, name:string, description:string, completed: boolean}) => {
  return {
    type: 'CHANGE_TODO',
    id: obj.id,
    name: obj.name ,
    descripcion: obj.description,
    completed: obj.completed
  }
}

export const changeTodos = (id:number, name?:string, description:string = 'pdt', completed: boolean = false) => {
  return {
    type: 'CHANGE_TODOS',
    id: id,
    name: name ,
    descripcion: description,
    completed: completed
  }
}