import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class App extends Component {
    render() {
        return (
            <div>
                <span>{this.props.appState.timer}</span>
                <button onClick={this.props.appState.resetTimer}>Reset</button>
            </div>
        )
    }
}

export default App
