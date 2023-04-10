car = {
	manufacturer: "Dodge",
	model: "Durango SRT Hellcat",
	year_of_manufacture: 2023,
	avg_speed: 290,
	showInfo() {
		console.log(`Manufacturer:${this.manufacturer}`)
		console.log(`Model:${this.model}`)
		console.log(`Year of manufacture:${this.year_of_manufacture}`)
		console.log(`Average speed:${this.avg_speed} km/h`)
	},
	CalcTime() {
		let distance = +prompt("Enter the distance(km): ")
		let hours
		for (hours = 0; hours < Math.round(distance / this.avg_speed); hours++) {
			if (hours % 4 == 0) {
				hours += 1
			}
		}
		console.log(`${hours} hours you need to spend to get to your destination`)
	}
}
car.showInfo()
car.CalcTime()