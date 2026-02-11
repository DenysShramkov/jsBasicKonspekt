
try {
	let buttons = document.querySelectorAll(".new-header__notif-container button");
	buttons.forEach(button => {
		button.addEventListener("click", (e) => {
			document.body.classList.remove('hamb-active');
			buttons.forEach(item => {
				item !== button ? item.classList.remove("active") : null;
			});
			button.classList.toggle("active");
			if (button.classList.contains("marked")) {
				button.classList.remove("marked");
				button.src = "https://go.waybetter.ai/www/images/umd/bell.svg";
			}
		});
	});
}catch(e) {
	console.log("No buttons found");
}
