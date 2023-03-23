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

//Task 6

const miles = 0.621371
let km = +prompt("Write how much kms would you want to convert into miles: ")
let converted = km / miles
alert(`${km} km in miles will be: ${converted.toFixed(0)} `)

//Task 7
let hours = +prompt("What is the current hour?")
let minutes = +prompt("What is the current minute?")
let hour = 23
let minute = 60
let left_hour = hour - hours
let left_minutes = minute - minutes
alert(`It is ${left_hour} hours and ${left_minutes} minutes left till the end of the day`)

//Task 8

let digit = +prompt("Write a 3-digit number")
let a = Math.floor((digit / 100))
let b = digit % 10
let c = Math.floor(((digit % 100) / 10))
let reversed_digit = c.toString() + b.toString() + a.toString()
alert(`${reversed_digit}`)







