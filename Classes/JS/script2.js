class Button {
	constructor(text, width, height) {
		this.text = text
		this.width = width
		this.height = height
	}
	showButton() {
		document.write(`<button style="width:${this.width}px;height:${this.height}px">${this.text}</button>`)
	}
}
class BootstrapButton extends Button {
	constructor(text, width, height, color) {
		super(text, width, height)
		this.color = color
	}
	showButton() {
		super.showButton()
		document.write(`
		<style>
		button {
			color: ${this.color}
		}
	</style>`)
	}
}
let button = new BootstrapButton("This is a button.", 96, 96, "blue")
button.showButton()