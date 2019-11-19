console.log("commencons");
let time = 1000;

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("poil");
		resolve(1);
	}, time);

	return this;
}).then((number) => {
	console.log(number);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(number * 2);
		}, time / 2)
	});
}).then((number) => {
	console.log(number);
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(number*2), time / 3)
	});
}).then((number) => {
	console.log(number);
});



