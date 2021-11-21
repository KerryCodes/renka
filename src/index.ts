import { useState } from 'react'


export class Context<T extends Object>{
  params: string
  state: T
}


const propKeyToDispatches= new Map()
const stateStore:Context<any>= {
  params: '',
  state: null,
}
const activatingProcess:{
  activating: boolean,
  setCount: React.Dispatch<React.SetStateAction<number>>,
}= {
  activating: false,
  setCount: null,
}
const initStateFuncCache={
  value: null
}


function createRenkaState(initStateFunc){
  const state= initStateFunc()
  const handler: ProxyHandler<typeof state>= {
    get: (target, propKey, receiver) => {
      if(activatingProcess.activating){
        const targetDispatches= propKeyToDispatches.get(propKey) || new Set()
        targetDispatches.add(activatingProcess.setCount)
        propKeyToDispatches.set(propKey, targetDispatches)
      }
      return Reflect.get(target, propKey, receiver)
    },
    set: (target, propKey, value, receiver) => {
      const targetDispatches= propKeyToDispatches.get(propKey)
      targetDispatches?.forEach(setCount => setCount(preCount => preCount+1))
      return Reflect.set(target, propKey, value, receiver)
    },
  }
  stateStore.state= new Proxy(state, handler)
  Reflect.defineProperty(stateStore, 'state', {writable: false})
  initStateFuncCache.value= initStateFunc
}


function getRenkaState<T>(){
  return stateStore
}


function useActivateState(activateFunc){
  activatingProcess.activating= true
  activatingProcess.setCount= useState(0)[1]
  const result= activateFunc()
  activatingProcess.activating= false
  return result
}


function initRenkaState(){
  Reflect.defineProperty(stateStore, 'state', {writable: true})
  createRenkaState(initStateFuncCache.value)
}


export { createRenkaState, getRenkaState, useActivateState, initRenkaState }