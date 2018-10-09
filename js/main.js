let apiKey = "d2bef6ba1a012d7aebba54cedd1e5859"
let units = "imperial"
let searchMethod = "zip"

function searchWeather(term) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${term}&APPID=${apiKey}&units=${units}`)
        .then(result => {
            return result.json()
        }).then(result => {
            init(result)
        })
}

function init(res) {
    console.log(res)
}

// selectors

let button =document.getElementById('searchButton')
button.addEventListener("click", () => {
    let term = document.getElementById('searchField').value

    console.log(term)
})