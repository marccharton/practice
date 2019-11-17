import { anaconda } from "./anaconda.js";
import { configureStore, createAction } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

function counter(state = 0, action) {
    switch(action.type) {
        case increment.type:
            return state + 1;
        case decrement.type:
            return state - 1;
        default:
            return state;
    }
}

const store = configureStore({
    reducer : counter
})

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