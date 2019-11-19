/*
* @Author: OMAO
* @Date:   2018-09-05 08:12:52
* @Last Modified by:   OMAO
* @Last Modified time: 2019-08-22 12:45:34
*/

class MyParagraphe extends EventTarget {
  constructor(content) {
    super();
    this._content = content;
    this._color = "#444";
  }

  get content() { return this._content; }
  get color() { return this._color; }
};

let myParagraphe = new MyParagraphe("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nisi assumenda illum vero earum asperiores illo praesentium quis eius fugiat veniam facilis, corporis quasi, nostrum id expedita autem ad sequi!");

myParagraphe.addEventListener("poil", function(e) {
  	this._content = e.detail.innerHTML;
	this._color = e.detail.color;
	const paragraph = document.getElementById("para1");
	paragraph.innerHTML = this._content;
	paragraph.style.color = this._color;
});

/*let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7*/


/*const paragraph = document.getElementById("para1");
paragraph.addEventListener("poil", (e) => {
	paragraph.innerHTML = e.detail.innerHTML;
	paragraph.style.color = e.detail.color;
});
*/

function changeParagraph(i, c) {
	const event = new CustomEvent("poil", {
		detail : {
			innerHTML : i,
			color : c
		}
	})

	myParagraphe.dispatchEvent(event);
}


document.addEventListener("click", () => changeParagraph("poil  poilt poiiiil", "red"));
