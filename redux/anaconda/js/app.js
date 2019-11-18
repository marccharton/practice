import { anaconda } from "./anaconda.js";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

const counter = createReducer(0, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1
});

const store = configureStore({
    reducer : counter
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