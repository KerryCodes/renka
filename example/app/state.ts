import { Context } from "../../src"


export interface TState{
  appValue: number,
  childValue: number,
}

export type TContext= Context<TState>


export function initState():TState{
  return  {
    appValue: 0,
    childValue: 0,
  }
}
