/*
* @Author: OMAO
* @Date:   2019-09-09 11:01:32
* @Last Modified by:   OMAO
* @Last Modified time: 2019-09-16 15:57:19
*/

console.log("--------------------------------------------------------");
console.log("[main]");

import printValue from "./print.js";
import * as main from "./main.js";
printValue(main.returnValue()); // exporté dans le module + main importé comme module entier.

import {returnValue} from "./main.js";
//import {pouet} from "./main.js"; // marche pas : pas de fonction nomée "pouet"
printValue(returnValue()); // exporté dans le module + fonction importée par son nom

// wesh
/*returnWesh() // marche pas : pas importé dans app.js + pas exporté dans le module
main.returnWesh() // marche pas : pas exporté dans le module*/

console.log("source = " + main.source);


console.log("--------------------------------------------------------");
console.log("[number]");

import {default as pouet} from "./main.js";
import pouetpouet from "./main.js";
import returnNumber from "./main.js";

printValue(pouet()); // exporté dans le module + fonction importée nommée
printValue(pouetpouet()); // exporté dans le module + fonction importée par défaut et renommée
printValue(returnNumber()); // exporté dans le module + fonction importée par défaut



console.log("--------------------------------------------------------");
console.log("[enum]");

import {POUET} from "./values.js";
console.log(POUET.VALUE2);



console.log("--------------------------------------------------------");
console.log("[class]");

import {MyClass} from "./class.js";
import {MyClass2} from "./class2.js";

let myClassLocal = new MyClass();
console.log(myClassLocal);
let myClass2 = new MyClass2();
console.log(myClass2);




console.log("--------------------------------------------------------");
console.log("[module_with_import]");

import * as moduleWithImport from "./module_with_import.js"
console.log("coucou = " + moduleWithImport.coucou);
console.log("destination = " + moduleWithImport.destination);

//moduleWithImport.destination = 78;

console.log("source = " + main.source);
console.log("destination = " + moduleWithImport.destination);




console.log("--------------------------------------------------------");
console.log("[class 2]");

import {myClass} from "./class.js"

myClass2.changeFoo();
myClass2.changeFoo2();

console.log(myClassLocal);
console.log(myClass);
console.log(myClass2);
