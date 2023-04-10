let time = {
	hour: 23,
	minute: 59,
	second: 59,
	showTime() {
		alert(`Зараз: ${this.hour}:${this.minute}:${this.second}`);
	},
	addTime() {
		this.second += 1;
		if (this.minute == 59 && this.second == 60) {
			this.hour += 1;
			this.minute = 0;
			this.second = 0;
			if (this.hour == 24) { this.hour = 0; }
		}
		if (this.minute < 59 && this.second == 60) {
			this.minute += 1;
			this.second = 0;
		}
		alert(`Після виконання функції додавання: ${this.hour}:${this.minute}:${this.second}`);
	},
	minusTime() {
		if (this.hour == 0 && this.minute == 0 && this.second == 0) {
			this.hour = 23;
			this.minute = 59;
			this.second = 59;
		}
		if (this.hour <= 23 && this.minute == 0 && this.second == 0) {
			this.hour -= 1;
			this.minute = 59;
			this.second = 59;
		}
		if (this.hour > 0 && this.minute > 0 && this.second == 0) {
			this.minute -= 1;
			this.second = 59;
		}
		alert(`Після виконання функції віднімання: ${this.hour}:${this.minute}:${this.second}`);
	},
	currentime() {
		document.write(`<p style="font-color:red;font-size:36px; text-align:center;">Current time is: ${this.hour}:${this.minute}:${this.second}</p>`)
	}

};
time.showTime()
time.addTime()
time.minusTime()
time.currentime()