let year = +prompt("Enter the year: ");
year % 400 === 0 || year % 4 === 0 && year % 100 != 0 ?
	alert("The year is leap") : alert("The year isn't leap")
