let str = prompt("Enter the string: ");
let sentence = prompt("Enter the sentence that will be turned into abbreviation: ")

//Task 1
console.log(`Amount of spaces: ${str.split(' ').length - 1}`);

//Task 2
console.log(`First char in Uppercase: ${str.replace(str[0], str[0].toUpperCase())}`);

//Task 3
words = str.split(" ");
console.log(`Amount of words in string: ${words.filter(word => word !== '').length}`);

//Task 4
let sentence_words = sentence.split(" ");
let abbreviation = "";
for (let i = 0; i < sentence_words.length; i++) {
	abbreviation += sentence_words[i].charAt(0).toUpperCase();
}
console.log(abbreviation);

//Task 5
function IsPalindrome(str) {
	str = str.replace(/ /g, '')
	let newstr = str.split("");
	let rev = newstr.reverse();
	let join = rev.join("");
	let trim = join.replace(/ /g, '')
	if (str == trim) {
		alert('Рядок є паліндромом');
	}
	else {
		alert('Рядок не є паліндромом');
	}
}
IsPalindrome(str);

//Task 6
url = prompt("Enter the url: ");
url = new URL(url);
console.log(`Protocol: ${url.protocol}`);
console.log(`Domain: ${url.hostname}`);
console.log(`Path: ${url.pathname}`);
