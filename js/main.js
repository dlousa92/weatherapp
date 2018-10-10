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
}

// selector functions

let button = document.getElementById("searchButton")

button.addEventListener("click", () => {
    let searchTerm = document.getElementById('searchField').value

    if (searchTerm) {
        searchWeather(searchTerm)
    }
})