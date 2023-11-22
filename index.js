const Wrap = document.querySelector('.wrap');

const handleInsertCurrentShape = (() => {
	let clicked = false;
	let shape = 'X';
	return () => {
		if (!clicked) {
			clicked = !clicked;
			return shape;
		}

		shape = shape === 'X' ? 'O' : 'X';

		return shape;
	};
})();

const checkWin = (one, two, three) => {
	const buttonList = Array.from(Wrap.querySelectorAll('button'));

	if (
		buttonList[one - 1].textContent === buttonList[two - 1].textContent &&
		buttonList[two - 1].textContent === buttonList[three - 1].textContent &&
		buttonList[two - 1].textContent.length > 0
	) {
		console.log(`${buttonList[one - 1].textContent} win`);
	}
};

const handleClickButton = (e) => {
	const btn = e.target;
	if (btn.textContent) return;
	btn.textContent = handleInsertCurrentShape();

	checkWin(1, 2, 3);
	checkWin(4, 5, 6);
	checkWin(7, 8, 9);
	checkWin(1, 4, 7);
	checkWin(2, 5, 8);
	checkWin(3, 6, 9);
	checkWin(3, 5, 7);
	checkWin(1, 5, 9);
};

Array.from(Wrap.querySelectorAll('button')).forEach((button) => {
	button.addEventListener('click', handleClickButton);
});
