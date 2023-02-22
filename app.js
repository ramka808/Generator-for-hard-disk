const mainEL = document.querySelector('.main')

const passwordEl = document.createElement('input')
passwordEl.classList.add('password')
passwordEl.setAttribute('placeholder', 'Сгенерировать пароль')
passwordEl.addEventListener('keypress', (e) => {
	e.preventDefault()
})

passwordEl.addEventListener('focus', (e) => {
	navigator.clipboard.writeText(passwordEl.value)
})

const copyBtn = document.createElement('button')
copyBtn.classList.add('password-button')
copyBtn.innerText = 'Скопировать'
copyBtn.addEventListener('click', (e) => {
	passwordEl.select()
	passwordEl.setSelectionRange(0, 9999)
	navigator.clipboard.writeText(passwordEl.value)
})

const geenerateBtn = document.createElement('button')
geenerateBtn.classList.add('password-button')
geenerateBtn.innerText = 'Сгенерировать'
geenerateBtn.addEventListener('click', (e) => {
	//Вызов функции гнерации пароля
	// let password = geeneratePassword(lengthPass.value)
	let password = geeneratePassword(8)

	passwordEl.value = password
})

function geeneratePassword(passwordLenght) {
	// const numberChars = '0123456789'
	// const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	// const lowerChars = upperChars.toLocaleLowerCase()
	// const symbolChars = '!@#$%^&*()_+'
	// const allChars = numberChars + upperChars + lowerChars + symbolChars

	const symbols = '0123456789ABCDEF'
	let randomString = ''

	for (let i = 0; i < passwordLenght; i++) {
		let randomNumber = Math.floor(Math.random() * symbols.length)
		if (i == 4) {
			randomString += '-'
		}
		randomString += symbols[randomNumber]
	}
	return randomString
}

mainEL.appendChild(passwordEl)
mainEL.appendChild(copyBtn)
mainEL.appendChild(geenerateBtn)
mainEL.appendChild(lengthPass)
