table = document.getElementById('table');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
Model = document.getElementById('model');
Year = document.getElementById('year');
date = document.getElementById('date');
Price = document.getElementById('price');
Color = document.getElementById('color');
Status = document.getElementById('status')
Type = document.getElementById('type');
tbody = document.getElementById('tbody');

addBtn.onclick = () => {
	inputModel = Model.value;
	inputYear = Year.value;
	inputDate = date.value;
	inputPrice = Price.value;
	inputColor = Color.value;
	inputStatus = Status.value
	inputType = Type.value;
	if (Symbol.value != "" && Model.value != "" && Year.value != "" && Price.value != "" && Color.value != "") {
		tbody.innerHTML += `<tr><td>${inputModel}</td><td>${inputYear}</td><td>${inputPrice}</td><td>${inputDate}</td><td>${inputColor}</td><td>${inputStatus}</td><td>${inputType}</td></tr>`;
	}
}
clearBtn.onclick = () => {
	tbody.innerHTML = "";
}
function Search() {
	let found;
	let searchInput = document.getElementById('searchInput');
	let filter = searchInput.value.toUpperCase();
	let tr = tbody.getElementsByTagName("tr");
	for (let i = 0; i < tr.length; i++) {
		let td = tr[i].getElementsByTagName("td");
		for (let j = 0; j < td.length; j++) {
			if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
				found = true;
			}
		}
		if (found) {
			tr[i].style.display = "";
			found = false;
		}
		else {
			tr[i].style.display = "none";
		}
	}
}
