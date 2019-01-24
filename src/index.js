import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import appState from './state/appState'

ReactDOM.render(<App appState={appState} />, document.getElementById('root'))
