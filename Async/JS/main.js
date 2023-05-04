//Task 1
// function getPromise(message, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(message);
// 		}, delay);
// 	})
// }
// getPromise("hello", 3000)
//.then(resolve => console.log(resolve));


//Task 2
function calcArrProduct(arr) {
	return new Promise((resolve, reject) => {
		isNumber = arr.every(i => ((typeof (i) == "number")));
		if (isNumber) {
			multi = arr.reduce((multiplication, value) => multiplication * value, 1);
			resolve(multi);
		}
		else {
			reject("Error! Incorrect array!");
		}
	})
}

calcArrProduct([1, 2, 2])
	.then(resolve => console.log(resolve))
	.catch(reject => console.log(reject));
