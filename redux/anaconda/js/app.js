import { anaconda } from "./anaconda.js";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        increment: state => state + 1,
        decrement: state => state - 1,
    }
});

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

const store = configureStore({
    reducer : reducer
});

store.subscribe(() => {
    console.log(store.getState());
});

document.getElementById("increment").addEventListener("click", () => {
    store.dispatch(increment());
});

document.getElementById("decrement").addEventListener("click", () => {
    store.dispatch(decrement());
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());