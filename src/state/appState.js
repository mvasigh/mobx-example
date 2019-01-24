import { observable, action } from 'mobx'

let appState = observable({
    timer: 0
})

appState.resetTimer = action(function reset() {
    appState.timer = 0
})

setInterval(() => {
    appState.timer += 1
}, 1000)

export default appState
