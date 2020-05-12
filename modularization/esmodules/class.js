/*
* @Author: OMAO
* @Date:   2019-09-16 14:22:56
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-16 15:57:05
*/

export class MyClass {
	constructor() {
		this.foo = "foo";
	}
	changeFoo(value) {
		this.foo = value;
	}
}

export let myClass = new MyClass();
