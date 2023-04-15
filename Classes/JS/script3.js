class ExtendedDate extends Date {
	ShowDate() {
		alert(`${this.getDate({ day: "long" })},${this.toLocaleString('default', { month: 'long' })} `)
	}
	CheckDate(date) {
		date < this.toLocaleDateString() ? alert("False") : alert("True")
	}
	LeapYear(year) {
		year % 400 === 0 || year % 4 === 0 && year % 100 != 0 ? alert("The year is leap") : alert("The year isn't leap")
	}
	NextDate() {
		let time = new Date()
		time.setDate(this.getDate() + 1)
		alert(time.toLocaleDateString())
	}
}
today = new ExtendedDate()
today.ShowDate()
today.CheckDate(today.toLocaleDateString())
today.LeapYear(today.getFullYear())
today.NextDate()