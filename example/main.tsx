import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createRenkaState } from '../src'
import { initState } from './app/state'


createRenkaState(initState)


ReactDOM.render(<App />, document.getElementById('root'))