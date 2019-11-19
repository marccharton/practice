/*
* @Author: OMAO
* @Date:   2019-09-16 16:51:05
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-20 17:13:20
*/

import {p5} from "./p5_context.js"
import {MyObject, myObject} from './MyObject.js';

let ici;

p5.preload = () => {
	myObject.preload();
}
p5.setup = () => {
	p5.createCanvas(window.innerWidth, window.innerHeight);
	p5.background(40);
	ici = new MyObject("ici");
	myObject.play();
}

p5.draw = () => {
	//ici.draw();
	myObject.draw();
	//console.log("--------------------------------------------------");
}

//console.log("pouuuett");
//console.log(p5);
