import React from 'react'
import logo from '../logo.svg'
import './index.css'
import { getRenkaState, useActivateState } from '../../src'
import { TContext } from './state'
import { Counter } from '../counter'
import { Child } from '../child'


export default function App() {
  const ctx= getRenkaState<TContext>()
  const { appValue }= useActivateState(() => ({
    appValue: ctx.state.appValue,
  }))

  console.log('App组件更新！')
  
  return (
    <div className="App">
      <div>renka,一个超轻量级的响应式React状态管理器</div>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="row">
        <button className="button" onClick={() => ctx.state.appValue++ }>
          +
        </button>
        <span className="value">{appValue}</span>
        <button className="button" onClick={() => ctx.state.appValue-- }>
          -
        </button>
      </div>
      <Counter />
      <div className="row">
        <div className="button" onClick={() => ctx.state.childValue++ }>增加子组件数值</div>
        <Child />
      </div>
    </div>
  )
}