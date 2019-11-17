import { anaconda } from "./anaconda.js";
import { createStore } from 'redux';

function counter(state = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);
store.subscribe(() => {
    console.log(store.getState());
});

document.getElementById("increment").addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});

document.getElementById("decrement").addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });