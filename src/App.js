import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
    render() {
        return (
            <div>
                <span>{this.props.appState.timer}</span>
            </div>
        )
    }
}

export default App
