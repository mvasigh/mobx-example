import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import appState from './state/appState'
import TodoStore from './state/TodoStore'

const todoStore = new TodoStore()

ReactDOM.render(
    <App appState={appState} todoStore={todoStore} />,
    document.getElementById('root')
)
