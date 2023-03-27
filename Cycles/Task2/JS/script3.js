let negative = 0
let positive = 0
let zero = 0
let even = 0
let odd = 0
for (let i = 0; i < 10; i++) {
	let n = +prompt("Введіть число: ");
	if (n != NaN) {
		(n < 0) ? negative++ : positive++;
		if (n == 0) { zero++ }
		(n % 2 === 0) ? even++ : odd++
	}
}
alert(`К-ть додатніх: ${positive}, к-ть від'ємних: ${negative}, к-ть нулів ${zero}, к-ть парних ${even}, к-ть непарних ${odd}`);