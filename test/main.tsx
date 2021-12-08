import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD:example/main.tsx
import App from './app'
import { createRenkaState } from '../src'
import { initState } from './app/state'
=======
import './index.css'
import App from './App'
import { createRenkaState } from '../src'
import { initState } from './state'
>>>>>>> 27d9fccab76d10581d1859986db6f891b3e615ac:test/main.tsx


createRenkaState(initState)

ReactDOM.render(<App />, document.getElementById('root'))
