import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import "p5";

const counterSlice = createSlice({
    name : "counter",
    initialState : 0,
    reducers : {
        increment: (state, action) => state + action.payload.incr,
        decrement: state => state - 1,
    }
});

const { actions, reducer } = counterSlice;
const { increment, decrement } = actions;

const store = configureStore({ reducer });

store.subscribe(() => {
    console.log(store.getState());
});

document.getElementById("increment").addEventListener("click", () => {
    store.dispatch(increment({ incr : 10 }));
});

document.getElementById("decrement").addEventListener("click", () => {
    store.dispatch(decrement());
});

store.dispatch(increment({ incr : 5 }));
store.dispatch(decrement());
store.dispatch(decrement());


var params = {
    bgColor : 0
};

function setup(){
    createCanvas(1200, 800);
    params.bgColor = color(255, 204, 0);
}

function draw(){
    background(params.bgColor);
    strokeWeight(1);
    fill(params.bgColor);
    circle(mouseX, mouseY, 20);
}
