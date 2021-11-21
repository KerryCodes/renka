"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRenkaState = exports.useActivateState = exports.getRenkaState = exports.createRenkaState = exports.Context = void 0;
var react_1 = require("react");
var Context = (function () {
    function Context() {
    }
    return Context;
}());
exports.Context = Context;
var propKeyToDispatches = new Map();
var stateStore = {
    params: '',
    state: null,
};
var activatingProcess = {
    activating: false,
    setCount: null,
};
var initStateFuncCache = {
    value: null
};
function createRenkaState(initStateFunc) {
    var state = initStateFunc();
    var handler = {
        get: function (target, propKey, receiver) {
            if (activatingProcess.activating) {
                var targetDispatches = propKeyToDispatches.get(propKey) || new Set();
                targetDispatches.add(activatingProcess.setCount);
                propKeyToDispatches.set(propKey, targetDispatches);
            }
            return Reflect.get(target, propKey, receiver);
        },
        set: function (target, propKey, value, receiver) {
            var targetDispatches = propKeyToDispatches.get(propKey);
            targetDispatches === null || targetDispatches === void 0 ? void 0 : targetDispatches.forEach(function (setCount) { return setCount(function (preCount) { return preCount + 1; }); });
            return Reflect.set(target, propKey, value, receiver);
        },
    };
    stateStore.state = new Proxy(state, handler);
    Reflect.defineProperty(stateStore, 'state', { writable: false });
    initStateFuncCache.value = initStateFunc;
}
exports.createRenkaState = createRenkaState;
function getRenkaState() {
    return stateStore;
}
exports.getRenkaState = getRenkaState;
function useActivateState(activateFunc) {
    activatingProcess.activating = true;
    activatingProcess.setCount = react_1.useState(0)[1];
    var result = activateFunc();
    activatingProcess.activating = false;
    return result;
}
exports.useActivateState = useActivateState;
function initRenkaState() {
    Reflect.defineProperty(stateStore, 'state', { writable: true });
    createRenkaState(initStateFuncCache.value);
}
exports.initRenkaState = initRenkaState;
