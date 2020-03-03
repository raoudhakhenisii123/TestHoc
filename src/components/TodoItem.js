import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, completeTodo, saveTodo } from '../actions/actions'

const TodoItem = props => {
    return (
        <div>
            <input onClick={() => props.complete(props.todo.id)} id={props.todo.id} type="checkbox" />
            <label style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}} htmlFor={props.todo.id}>{props.todo.text}</label>
            <button onClick={() => props.delete(props.todo.id)}>Delete</button>
            <button onClick={() => props.save(props.todo)}>Edit</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        delete: id => dispatch(deleteTodo(id)),
        complete: id => dispatch(completeTodo(id)),
        save: todo => dispatch(saveTodo(todo))
    }
}
export default connect(null, mapDispatchToProps)(TodoItem)
