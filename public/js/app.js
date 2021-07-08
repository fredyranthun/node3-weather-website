
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const [messageOne, messageTwo] = document.querySelectorAll('p')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = 'Loading content ...'
    messageTwo.textContent = ''

    const location = search.value;
    const url = `/weather?address=${location}`

    const currentIcon = document.querySelector('#icon')
    const main = document.querySelector('main')

    if (currentIcon) {
        main.removeChild(currentIcon)
    }

    const icon = document.createElement('img')

    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        messageOne.textContent = data.location
                        messageTwo.textContent = data.forecast
                        if (data.icon) {
                            icon.setAttribute('src', data.icon)
                            icon.setAttribute('alt', 'weather icon')
                            icon.setAttribute('id', 'icon')
                            main.appendChild(icon)
                        }
                    }
                })
        })

})