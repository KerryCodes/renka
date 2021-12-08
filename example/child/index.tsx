import React from "react"
import { getRenkaState, useActivateState } from "../../src";
import { TContext } from "../app/state";

export function Child(){
  const ctx= getRenkaState<TContext>()
  const { childValue }= useActivateState(() => ({
    childValue: ctx.state.childValue,
  }))

  console.log('子组件更新！');

  return (
    <div>
      <span className="value">{childValue}</span>
    </div>
  )
}