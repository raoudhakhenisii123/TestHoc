import React, { Component } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux'
import { addTodo, editTodo, clear } from '../actions/actions'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            completed: false
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }
    addNewTodo = () => {
        if(this.props.todos.saved){
            this.props.edit(this.state)
            this.setState({ text: '' });
            this.props.clear()
        }else{
            if(this.state.text){
                this.props.add({...this.state, id: uuid()})
                this.setState({ text: '' });
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState(nextProps.todos.saved)
    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleChange} type="text" placeholder="add new todo" />
                <button onClick={this.addNewTodo}>
                    {this.props.todos.saved ? "EDIT!" : "ADD!"} 
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add: newTodo => dispatch(addTodo(newTodo)),
        edit: todo => dispatch(editTodo(todo)),
        clear: () => dispatch(clear()),
    }
}
const mapStateToProps = state => {
    return{
        todos: state.allTodos
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
