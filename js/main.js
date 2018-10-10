const apiKey = "d2bef6ba1a012d7aebba54cedd1e5859"
let units = "imperial"
let searchMethod = "zip"

// sets whether the user is searching with zip code or city name
function getSearchMethod (searchTerm) {
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) === searchTerm) {
        searchMethod = "zip"
    } else {
        searchMethod = "q"
    }
}

// executes the query
function searchWeather(searchTerm) {
    getSearchMethod(searchTerm)

    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${apiKey}&units=${units}`)
        .then(result => {
            return result.json()
        }).then(result => {
            init(result)
        })
}

// populates all fields in our html file with the res
function init(res) {
    console.log(res)

    switch (res.weather[0].main) {
        case "Clear":
            document.body.style.backgroundImage = "url('./img/sunny.jpg')"
            break
        case "ThunderStorm":
            document.body.style.backgroundImage = "url('./img/storm.jpeg')"
            break
        case "Drizzle":
        case "Rain":
        case "Mist":
            document.body.style.backgroundImage = "url('./img/rain.jpeg')"
            break
        case "Snow":
            document.body.style.backgroundImage = "url('./img/snow.jpeg')"
            break
        case "Clouds":
            document.body.style.backgroundImage = "url('./img/cloudy.jpeg')"
            break
        default: 
            break
    }
}

// selector functions

let button = document.getElementById("searchButton")

button.addEventListener("click", () => {
    let searchTerm = document.getElementById('searchField').value

    if (searchTerm) {
        searchWeather(searchTerm)
    }
})