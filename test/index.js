let count = 0;

let firsta = document.querySelector(`#two`);
let seconda = document.querySelector(`#six`);
let thirda = document.querySelector(`#seven`);
let fourtha = document.querySelector(`#twelve`);

let buta = document.querySelector(`#odin`);
let butb = document.querySelector(`#dva`);
let butc = document.querySelector(`#tri`);
let butd = document.querySelector(`#chetire`);

let aboba = document.querySelector(`#aboba`)

buta.addEventListener(`click`, function () {
	if (firsta.checked) {
		count += 1;
	}
	buta.classList.add(`disabled`);
});

butb.addEventListener(`click`, function () {
	if (seconda.checked) {
		count += 1;
	}
	butb.classList.add(`disabled`);
});

butc.addEventListener(`click`, function () {
	if (thirda.checked) {
		count += 1;
	}
	butc.classList.add(`disabled`);
});
butd.addEventListener(`click`, function () {
	if (fourtha.checked) {
		count += 1;
	}
	butd.classList.add(`disabled`);
});

aboba.addEventListener(`click`, function () {
	aboba.innerHTML = `Итог: ${count} из 4`;
});