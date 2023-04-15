let timer = document.getElementById("time")
function refreshTime() {
	let dateString = new Date().toLocaleString("en-GB", { timeZone: "Europe/Kiev" });
	let formattedString = dateString.replace(", ", " - ")
	timer.innerHTML = formattedString;
}
setInterval(refreshTime, 1000)