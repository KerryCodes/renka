import React, { useEffect, useState } from 'react'
import { getRenkaState, initRenkaState, useActivateState } from '../lib'


export function Aa(props:React.PropsWithoutRef<{count:number, setCount:any}>){
  const { count, setCount}= props
  const ctx= getRenkaState()
  const { num, a }= useActivateState(() => ({
    num: ctx.state.num,
    a: ctx.state.a,
  }))
  // const num= useActivateState(() => ctx.state.num)
  // const {num}=ctx.state
  const [count2, setCount2]= useState(0)
  console.log('app:',count,'Aa:', count2);
  // ctx.state= {}

  useEffect(() => {
    setTimeout(initRenkaState, 5000)
  }, [])

  return (
    <div>
      <button type="button" onClick={() => ctx.state.num++}>
        count Aa: {num}
      </button>
      <button type="button" onClick={() => ctx.state.a++}>
        count A2: {a}
      </button>
    </div>
  )
}