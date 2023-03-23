document.querySelector("input[type=\"search\"]").addEventListener("input", (e) => {
	[...document.querySelectorAll(".catalog-item")].forEach(item => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
	[...document.querySelectorAll("catalog-item__subtitle, .catalog-item__descr")].forEach(item => {
		if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			item.style.display = "flex";
		} else {
			
		}
	});
});

const authorCards = document.querySelectorAll('.catalog-item');
authorCards.forEach(card => {
	let randomAniDelay = Math.floor(Math.random() * 500);
	card.style.animation = `fadeIn 1s .${randomAniDelay}s ease forwards`;
});