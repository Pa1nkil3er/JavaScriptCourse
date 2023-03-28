let symbol = prompt("Введіть число від 0 до 9")
switch (symbol) {
	case "0":
		value = ')'
		break;
	case "1":
		value = '!'
		break;
	case "2":
		value = '@'
		break;
	case "3":
		value = '#'
		break;
	case "4":
		value = '$'
		break;
	case "5":
		value = '%'
		break;
	case "6":
		value = '^'
		break;
	case "7":
		value = '&'
	case "8":
		value = '*'
		break;
	case "9":
		value = '('
		break;
}
alert(value)