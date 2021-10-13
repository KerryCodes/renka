import { Context } from "../lib"


export interface TState{
  num: number,
  a: number,
  str: string,
  obj: any,
}

export type TContext= Context<TState>


export function initState():TState{
  return  {
    num: 1,
    a:0,
    str: 'hello',
    obj: {
      a:2
    }
  }
}
