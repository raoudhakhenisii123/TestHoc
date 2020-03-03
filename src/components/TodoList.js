import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = props => {
    return(
        props.todos.todos.map(el => <TodoItem key={el.id} todo={el}/>)
    )
}
const mapStateToProps = state => {
    return{
        todos: state.allTodos
    }
}

export default connect(mapStateToProps)(TodoList)