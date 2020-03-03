import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, SAVE_TODO, CLEAR } from '../actions/types'
import uuid from 'uuid'

let initialState = {
    todos: [
        {
            id: uuid(),
            text: 'Learn React',
            completed: false
        },
        {
            id: uuid(),
            text: 'Learn Redux',
            completed: false
        }
    ],
    saved: null
}
const TodoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.payload)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload ? {...el, completed: !el.completed} : el)
            }
        case SAVE_TODO:
            return{
                ...state,
                saved: action.payload
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload.id ? action.payload : el)
            }
        case CLEAR:
            return{
                ...state,
                saved: null
            }
        default:
            return state
    }
}

export default TodoReducer;