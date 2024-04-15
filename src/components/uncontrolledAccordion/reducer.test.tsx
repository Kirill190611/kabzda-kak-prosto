import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test("Collapsed should be true", () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true);
})

test("Collapsed should be false", () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false);
})

test("Collapsed have incorrect action", () => {
    const state: StateType = {
        collapsed: true
    }

    expect(() => reducer(state, {type: "123"})).toThrowError();
})