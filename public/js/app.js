const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const [messageOne, messageTwo] = document.querySelectorAll('p')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    messageOne.textContent = 'Loading content ...'
    messageTwo.textContent = ''

    const location = search.value;
    const url = `/weather?address=${location}`

    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        messageOne.textContent = data.location
                        messageTwo.textContent = data.forecast
                    }
                })
        })

})