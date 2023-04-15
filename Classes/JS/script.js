class CssClass {
	constructor(ClassName, styles) {
		this.ClassName = ClassName;
		this.stylesMap = styles;
	}
	SetStyle() {
		let n = +prompt("Enter the amount of styles you want to add: ")
		for (let i = 0; i < n; i++) {
			let style = prompt("Name of the style:");
			let value = prompt("Enter the value of the style:");
			this.stylesMap.set(style, value);
		}
	}
	DelStyle() {
		let del_style = prompt("Enter the style that you want to delete: ");
		this.stylesMap.delete(del_style);
	}
	GetCss() {
		console.log("header{")
		for (const [key, value] of this.stylesMap) {
			console.log(`${key}:${value}`);
		}
		console.log("}")
	}
}
let NewStyle = new Map()
let NewCSS = new CssClass("Header", NewStyle)
NewCSS.SetStyle()
NewCSS.DelStyle()
NewCSS.GetCss()
