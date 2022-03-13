import './index.css'
import React, { useState } from "react";
import { getRenkaState } from '../../src';
import { TContext } from '../app/state';


export function Counter() {
  const ctx= getRenkaState<TContext>()
  const [amount, setAmount] = useState(2)

  console.log('Counter组件更新！')

  return (
    <div>
      <div className="row">
        <input className="textbox" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <button className="button" onClick={() => ctx.state.appValue += amount}>
          Add Amount
        </button>
        <button className="button asyncButton" onClick={() => ctx.state.appValue += amount}>
          Add Async Amount
        </button>
      </div>
    </div>
  )
}