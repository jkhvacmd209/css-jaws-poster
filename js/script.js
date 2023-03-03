// AUDIO CONTROL

//Importeer audio
const audio = new Audio('./assets/jaws.m4a')

//Loop audio
audio.loop = true

//Selecteer button
const audioButton = document.querySelector('#audio-control')

//Speel of pauzeer audio
audioButton.addEventListener('click', () => {
	if (audio.duration > 0 && !audio.paused) {
		audio.pause()
		audioButton.textContent = '▶️'
		audioButton.title = 'pauzeer muziek'
	} else {
		audio.play()
		audioButton.textContent = '⏸'
		audioButton.title = 'pauzeer muziek'
	}
})




// DARK MODE BUTTON

//Selecteer button
const darkmodeButton = document.querySelector('#darkmode-toggle')

//Zet darkmode aan functie
const enableDarkMode = () => {
	document.documentElement.classList.remove('light-mode')
	document.documentElement.classList.add('dark-mode')
	darkmodeButton.textContent = '🏙'
	darkmodeButton.title = 'lichte modus'
}

//Zet lightmode aan functie
const enableLightMode = () => {
	document.documentElement.classList.remove('dark-mode')
	document.documentElement.classList.add('light-mode')
	darkmodeButton.textContent = '🌃'
	darkmodeButton.title = 'donkere modus'
}

//Zet darkmode button to light de gebruiker dark mode heeft
window.matchMedia('(prefers-color-scheme: dark)').matches ? enableDarkMode() : enableLightMode()

//Verander dark- of lightmode als het systeem veranderd
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
	document.documentElement.classList.contains('light-mode') ? enableDarkMode() : enableLightMode()
})

//Verander dark- of lightmode als het systeem veranderd
darkmodeButton.addEventListener('click', () => {
	document.documentElement.classList.contains('light-mode') ? enableDarkMode() : enableLightMode()
})