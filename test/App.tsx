import React, { useState } from 'react'
import './App.css'
import { getRenkaState, useActivateState } from '../src'
import { Aa } from './componentA'
import { TContext } from './state'


function App() {
  const [count, setCount] = useState(0)
  const ctx= getRenkaState<TContext>()
  const {num}= useActivateState(() => ({
    num: ctx.state.num,
  }))
  // const {num}=ctx.state

  console.log('app');
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <div>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={() => ctx.state.num++}>
            count is: {num}
          </button>
          <Aa count={count} setCount={setCount} ></Aa>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
