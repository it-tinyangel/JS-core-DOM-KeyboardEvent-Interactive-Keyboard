const inputText = document.querySelector('.input-text');
const keys = document.querySelectorAll('.key');
const backspaceKey = document.querySelector('.backspace_key');
const tabKey = document.querySelector('.tab_key');
const capsLockKey = document.querySelector('.capslock_key');
const spaceKey = document.querySelector('.space_key');
const shiftKey = document.querySelector('.shift_key');
const shiftLeftKey = document.querySelector('.shift-left');
const shiftRightKey = document.querySelector('.shift-right');
const ctrlLeftKey = document.querySelector('.ctrl-left');
const ctrlRightKey = document.querySelector('.ctrl-right');
const altLeftKey = document.querySelector('.alt-left');
const altRightKey = document.querySelector('.alt-right');
const arrowLeft = document.querySelector('.arrow-left');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');
const arrowRight = document.querySelector('.arrow-right');

inputText.addEventListener('keydown', function (event) {
	const key = event.code;

	keys.forEach(button => {
		if (event.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.add('active');
		}
	});

	if (key === 'Backspace') {
		backspaceKey.classList.add('active');
	}
	if (key === 'Tab') {
		tabKey.classList.add('active');
	}
	if (key === 'Space') {
		spaceKey.classList.add('active');
	}
	if (key === 'ShiftLeft') {
		shiftLeftKey.classList.add('active');
	}
	if (key === 'ShiftRight') {
		shiftRightKey.classList.add('active');
	}
	if (key === 'ControlLeft') {
		ctrlLeftKey.classList.add('active');
	}
	if (key === 'ControlRight') {
		ctrlRightKey.classList.add('active');
	}
	if (key === 'AltLeft') {
		altLeftKey.classList.add('active');
	}
	if (key === 'AltRight') {
		altRightKey.classList.add('active');
	}
	if (key === 'ArrowLeft') {
		arrowLeft.classList.add('active');
	}
	if (key === 'ArrowUp') {
		arrowUp.classList.add('active');
	}
	if (key === 'ArrowDown') {
		arrowDown.classList.add('active');
	}
	if (key === 'ArrowRight') {
		arrowRight.classList.add('active');
	}

	handleCapsLock(event);
});

inputText.addEventListener('keyup', function (event) {
	const key = event.code;

	keys.forEach(button => {
		if (event.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.remove('active');
		}
	});

	if (key === 'Backspace') {
		backspaceKey.classList.remove('active');
	}
	if (key === 'Tab') {
		tabKey.classList.remove('active');
	}
	if (key === 'Space') {
		spaceKey.classList.remove('active');
	}
	if (key === 'ShiftLeft') {
		shiftLeftKey.classList.remove('active');
	}
	if (key === 'ShiftRight') {
		shiftRightKey.classList.remove('active');
	}
	if (key === 'ControlLeft') {
		ctrlLeftKey.classList.remove('active');
	}
	if (key === 'ControlRight') {
		ctrlRightKey.classList.remove('active');
	}
	if (key === 'AltLeft') {
		altLeftKey.classList.remove('active');
	}
	if (key === 'AltRight') {
		altRightKey.classList.remove('active');
	}
	if (key === 'ArrowLeft') {
		arrowLeft.classList.remove('active');
	}
	if (key === 'ArrowUp') {
		arrowUp.classList.remove('active');
	}
	if (key === 'ArrowDown') {
		arrowDown.classList.remove('active');
	}
	if (key === 'ArrowRight') {
		arrowRight.classList.remove('active');
	}

	handleCapsLock(event);
});

inputText.addEventListener('keydown', (event) => {
	if (event.key == 'Tab') {
		event.preventDefault();
		inputText.value += '	';
	}
})

function handleCapsLock(event) {
	if (event.getModifierState('CapsLock')) {
		capsLockKey.classList.add('active');
	} else {
		capsLockKey.classList.remove('active');
	}
}
