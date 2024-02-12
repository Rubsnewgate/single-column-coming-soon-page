const SUBMIT_BTN = document.querySelector('.submit-btn')

SUBMIT_BTN.addEventListener('click', (event) => {
	event.preventDefault()

	let email = document.querySelector('.form__input').value
	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailPattern.test(email)) {
		document.querySelector('.form__input').style.border = '1px solid hsl(354, 100%, 66%)'
		document.querySelector('.email--error').style.display = 'block'
	}
	else {
		document.querySelector('.email--error').style.display = 'none'
	}
})
