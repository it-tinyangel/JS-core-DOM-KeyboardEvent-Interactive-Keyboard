const inputText = document.querySelector('.input-text');
const keys = document.querySelectorAll('.key');
const capsLockKey = document.querySelector('.capslock_key');

inputText.addEventListener('keydown', function (e) {
	const key = e.code;

	keys.forEach(button => {
		if (event.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.add('active');
		}
		document.getElementById(key).classList.add('active');
	});

	handleCapsLock(e);
});

inputText.addEventListener('keyup', function (e) {
	const key = e.code;

	keys.forEach(button => {
		if (e.key.toLowerCase() === button.textContent.toLowerCase()) {
			button.classList.remove('active');
		}
		document.getElementById(key).classList.remove('active');
	});

	handleCapsLock(e);
});

inputText.addEventListener('keydown', (e) => {
	const key = e.code;

	if (key == 'Tab') {
		e.preventDefault();
		inputText.value += '	';
	}
})

function handleCapsLock(e) {
	if (e.getModifierState('CapsLock')) {
		capsLockKey.classList.add('active');
	} else {
		capsLockKey.classList.remove('active');
	}
}
