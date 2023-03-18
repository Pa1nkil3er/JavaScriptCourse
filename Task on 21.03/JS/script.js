//Task 1
let year_of_birth = +prompt("Enter the year of birth: ");
const year = 2023;
age = year - year_of_birth;
alert(`You are ${age} years old`);

//Task2
let radius = +prompt("Enter the radious of circle");
alert(`The area of circle equals ${radius ** 2}`);

//Task 3
let distance = +prompt("Enter the distance in km between two cities: ");
let time = +prompt("Enter the time you have to reach the destination: ");
let speed = distance / time;
alert(`The speed you need to arrive on time is ${speed.toFixed(0)} km/h `);

//Task 4
let usd = +prompt("Enter the amount of $ you want to exchange: ");
const exc_rate_euro = 0.93;
euro = usd / exc_rate_euro
alert(`You received ${euro.toFixed(0)} €`);

//Task 5
let capacity = +prompt("Enter the capacity of your flash drive(in GB)");
let amount = (1024 * capacity) / 820;
alert(`This flash drive can store ${amount.toFixed(0)} of 820 mb files `);

