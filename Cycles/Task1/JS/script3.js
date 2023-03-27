let day = +prompt("Enter the day: ");
let month = +prompt("Enter the month: ");
let year = +prompt("Enter the year: ");
let date = new Date(`${year}-${month}-${day}`);
date.setDate(data.getDate() + 1);
console.log(`The next date : ${date.toLocaleDateString()}`);