let counter = 0;
let numeroPantalla = document.getElementById("number");
let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		let classList = event.currentTarget.classList;
		if (classList[1] === "decreaseButton") {
			counter--;
		} else if (classList[1] === "resetButton") {
			counter = 0;
		} else {
			counter++;
		}

		numeroPantalla.innerText = counter;

		if (counter < 0) {
			numeroPantalla.style.color = "#aa1919";
		} else if (counter === 0) {
			numeroPantalla.style.color = "#202020";
		} else {
			numeroPantalla.style.color = "#008000";
		}
	});
});
