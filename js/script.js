const inputText = document.querySelector('.input-text');
const capsLockKey = document.querySelector('.capslock_key');
const shiftRightKey = document.querySelector('.shift-right');
const shiftLeftKey = document.querySelector('.shift-left');
const altRightKey = document.querySelector('.alt-right');
const ctrlLeftKey = document.querySelector('.ctrl-left');

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

inputText.focus();

function handleKeyDown(event) {
	const keyElement = document.getElementById(event.code);

	if (keyElement) {
		keyElement.classList.add('active');
	}

	if (isTabPress(event)) {
		insertTabCharacter();
		event.preventDefault();
	}

	if (isCapsLockPress(event)) {
		handleCapsLock(event);
	}

	if (isCtrlOrAltPress(event)) {
		event.preventDefault();
	}

	handleShiftPress(event);
	handleAltRightKey(event);
}

function handleKeyUp(event) {
	const keyElement = document.getElementById(event.code);

	if (keyElement) {
		keyElement.classList.remove('active');
	}

	if (isCapsLockPress(event)) {
		handleCapsLock(event);
	}

	handleShiftPress(event);
}

function isTabPress(event) {
	return event.key === 'Tab';
}

function insertTabCharacter() {
	const { value, selectionStart, selectionEnd } = inputText;

	inputText.value = `${value.substring(0, selectionStart)}\t${value.substring(selectionEnd)}`;
	inputText.selectionStart = inputText.selectionEnd = selectionEnd + 1;
}

function handleCapsLockPress(event) {
	if (capsLockKey) {
		handleCapsLock(event);
	}
}

function isCapsLockPress(event) {
	return event.key === 'CapsLock';
}

function handleCapsLock(event) {
	if (capsLockKey) {
		const isCapsLockOn = event.getModifierState('CapsLock');

		capsLockKey.classList.toggle('active', isCapsLockOn);
	}
}

function isCtrlOrAltPress(event) {
	return (event.ctrlKey && !event.altKey) || (!event.ctrlKey && event.altKey);
}

function handleShiftPress(event) {
	const isShiftRight = event.key === 'Shift' || event.code === 'ShiftRight';
	const isShiftLeft = event.key === 'Shift' && event.code === 'ShiftLeft';

	if (isShiftRight && event.type === 'keydown') {
		shiftRightKey.classList.add('active');
	} else if (isShiftRight && event.type === 'keyup') {
		shiftRightKey.classList.remove('active');
	}

	if (isShiftLeft) {
		if (event.type === 'keydown') {
			shiftRightKey.classList.remove('active');
		}
	}
}

function handleAltRightKey(event) {
	const isRightAlt = event.code === 'AltRight' && event.key === 'AltGraph' && event.location === 2;

	if (isRightAlt && event.type === 'keydown') {
		ctrlLeftKey.classList.remove('active');
	} else if (isRightAlt && event.type === 'keyup') {
		ctrlLeftKey.classList.remove('active');
	}
}
