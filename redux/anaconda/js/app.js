import { anaconda } from "./anaconda.js";
import { createStore } from 'redux';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function increment() {
    return { type : INCREMENT };
}

function decrement() {
    return { type : DECREMENT };
}


function counter(state = 0, action) {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

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