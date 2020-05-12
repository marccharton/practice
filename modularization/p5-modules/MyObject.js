/*
* @Author: OMAO
* @Date:   2019-09-18 15:27:41
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-20 17:12:56
*/

import p5Lib from 'p5';
import {p5} from "./p5_context.js"

export class MyObject {
	constructor(name) {
		this.name = name;
	}
	preload() {
		this.sound = p5.loadSound('assets/LakeTrout.mp3');
	}
	play() {
    	this.sound.setVolume(0.1);
    	this.sound.play();
    	this.fft = new p5Lib.FFT();
	}
	draw() {
		// console.log(this.name);
    	p5.noStroke();

		p5.fill(12, 124, 230);
    	p5.circle(50, 50, 50, 50);

    	p5.fill(12, 230, 124);
    	p5.circle(120, 50, 50, 50);

    	p5.fill(230, 12, 124);
    	p5.circle(190, 50, 50, 50);

	}
}
export let myObject = new MyObject("myObject");
