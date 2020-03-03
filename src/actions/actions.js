import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, SAVE_TODO, CLEAR } from './types'

export const addTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const deleteTodo = id => {
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = id => {
    return{
        type: COMPLETE_TODO,
        payload: id
    }
}
export const saveTodo = todo => {
    return{
        type: SAVE_TODO,
        payload: todo
    }
}

export const editTodo = todo => {
    return{
        type: EDIT_TODO,
        payload: todo
    }
}

export const clear = () => {
    return{
        type: CLEAR
    }
}