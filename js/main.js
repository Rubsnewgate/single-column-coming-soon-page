const domElements = {
	submitBtn: document.querySelector('.submit-btn'),
	emailInput: document.querySelector('.form__input'),
	errorMessage: document.querySelector('.email--error'),
}

const validateEmail = (event) => {
	event.preventDefault()

	let userEmail = domElements.emailInput.value
	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailPattern.test(userEmail)) {
		domElements.emailInput.style.border = '1px solid hsl(354, 100%, 66%)'
		domElements.errorMessage.style.display = 'block'
	}
	else {
		domElements.errorMessage.style.display = 'none'
	}
}

domElements.submitBtn.addEventListener('click', validateEmail)
