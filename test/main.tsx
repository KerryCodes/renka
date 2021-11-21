import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createRenkaState } from '../src'
import { initState } from './state'


createRenkaState(initState)

ReactDOM.render(<App />, document.getElementById('root'))
