import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
    constructor(props) {
        super(props)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleAddTodo() {
        const { addTodo } = this.props.todoStore
        const task = prompt('Add todo')
        addTodo(task)
    }

    renderTodoList() {
        return this.props.todoStore.todos.map((todo, i) => (
            <li key={i}>
                <input type="checkbox" />
                {todo.task}
            </li>
        ))
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <ul>{this.renderTodoList()}</ul>
                <button onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        )
    }
}

export default App
