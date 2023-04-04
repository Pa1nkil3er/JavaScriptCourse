let array = [];
//task 1
for (let i = 0; i < 20; i++) {
	array[i] = Math.ceil(Math.random() * 100);
}

for (let i = 0; i < 20; i++) {
	console.log(`${i + 1} - ${array[i]}  `);
}

//task 2
console.log(`Descending order:${array.sort((b, a) => a - b)}`);
//task 3
let divided_by_seven = false;
for (let i = 0; i < 20; i++) {
	if (array[i] % 7 == 0) {
		divided_by_seven = true;
	}
}
console.log(`Has a number that is a multiple of 7:${divided_by_seven}`);
//task 4
let HasDuplicate = array.some((val, i) => array.indexOf(val) !== i);
console.log(`Containts a duplicate:${HasDuplicate}`);
//task 5
array.splice(0, 3)
console.log(`Removed 3 first elements: ${array}`);
//task 6
let even = 0;
for (let item = 0; item < array.length; item++) {
	if (array[item] % 2 == 0) {
		even++;
	}
}
console.log(`Amount of even numbers in array: ${even} `);
//task 7
for (let i = Math.ceil(array.length / 2); i < array.length; i++) {
	array[i] = 0;
}
console.log(`The second half of array filled with zeros: ${array}`);
