export declare class Context<T extends Object> {
    params: string;
    state: T;
}
declare function createRenkaState(initStateFunc: any): void;
declare function getRenkaState<T>(): Context<any>;
declare function useActivateState(activateFunc: any): any;
declare function initRenkaState(): void;
export { createRenkaState, getRenkaState, useActivateState, initRenkaState };
