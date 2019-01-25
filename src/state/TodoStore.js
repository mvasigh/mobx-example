import { observable, computed, action } from 'mobx'

class TodoStore {
    @observable todos = [
        {
            task: 'Create a todo task',
            completed: false
        }
    ]

    @computed get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length
    }

    @action addTodo = task => {
        this.todos.push({
            task,
            completed: false
        })
    }
}

export default TodoStore
