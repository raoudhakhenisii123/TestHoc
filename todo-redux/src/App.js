import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import AddTodo from './components/AddTodo'

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList/>
    </div>
  )
}

export default App
