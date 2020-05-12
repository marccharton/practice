/*
* @Author: OMAO
* @Date:   2019-09-16 14:22:56
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-16 15:55:29
*/

import {MyClass, myClass} from "./class.js";

export class MyClass2 {
	constructor() {
		this.bar = "bar";
	}
	changeFoo() {
		myClass.foo = "foooooooo";
	}
	changeFoo2() {
		myClass.changeFoo("foufoufoufou");
	}
}
