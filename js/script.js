const inputText = document.querySelector('.input-text');
const keys = document.querySelectorAll('.key');
const specialKeys = {
	Backspace: document.querySelector('.backspace_key'),
	Tab: document.querySelector('.tab_key'),
	Space: document.querySelector('.space_key'),
	Enter: document.querySelector('.enter_key'),
	CapsLock: document.querySelector('.capslock_key'),
	ShiftLeft: document.querySelector('.shift-left'),
	ShiftRight: document.querySelector('.shift-right'),
	ControlLeft: document.querySelector('.ctrl-left'),
	ControlRight: document.querySelector('.ctrl-right'),
	AltLeft: document.querySelector('.alt-left'),
	AltRight: document.querySelector('.alt-right'),
	ArrowLeft: document.querySelector('.arrow-left'),
	ArrowUp: document.querySelector('.arrow-up'),
	ArrowDown: document.querySelector('.arrow-down'),
	ArrowRight: document.querySelector('.arrow-right')
};

document.addEventListener('keydown', function (event) {
	const key = event.code;

	keys.forEach(button => {
		if (event.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.add('active');
		}
	});

	if (specialKeys[key]) {
		specialKeys[key].classList.add('active');
	}

	if (key === 'Enter' && specialKeys.Enter) {
		specialKeys.Enter.classList.add('active');
	}

	if (key === 'Tab') {
		event.preventDefault();
		inputText.value += '\t';
	}

	handleCapsLock(event);
	handleShiftRight(event);
	handleAlt(event);
});

document.addEventListener('keyup', function (event) {
	const key = event.code;

	keys.forEach(button => {
		if (event.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.remove('active');
		}
	});

	if (specialKeys[key]) {
		specialKeys[key].classList.remove('active');
	}

	if (key === 'Enter' && specialKeys.Enter) {
		specialKeys.Enter.classList.remove('active');
	}

	handleCapsLock(event);
	handleShiftRight(event);
	handleAlt(event);
});

function handleCapsLock(event) {
	const { CapsLock } = specialKeys;
	CapsLock.classList.toggle('active', event.getModifierState('CapsLock'));
}

function handleShiftRight(event) {
	const { ShiftRight } = specialKeys;
	const { key, code, type } = event;

	if ((key === 'Shift' || code === 'ShiftRight') && type === 'keydown') {
		ShiftRight.classList.add('active');
	} else if ((key === 'Shift' || code === 'ShiftRight') && type === 'keyup') {
		ShiftRight.classList.remove('active');
	}

	if (key === 'Shift' && code === 'ShiftLeft' && type === 'keydown') {
		ShiftRight.classList.remove('active');
	}
}

function handleAlt(event) {
	const { AltRight, AltLeft } = specialKeys;
	const { key, code, type } = event;

	if (key === 'Alt' && code === 'AltLeft' && type === 'keydown') {
		AltRight.classList.remove('active');
	} else if (key === 'Alt' && code === 'AltRight' && type === 'keydown') {
		AltLeft.classList.remove('active');
	}
}
