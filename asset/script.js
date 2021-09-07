function initPage() {
    const inputEl = document.getElementById("city-input");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-weather-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");4
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory);
    

    const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
//  When search button is clicked, read the city name typed by the user

searchEl.addEventListener("click",function() {
    const searchTerm = inputEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search",JSON.stringify(searchHistory));
    renderSearchHistory();
})

clearEl.addEventListener("click",function() {
    searchHistory = [];
    renderSearchHistory();
})

function k2f(K) {
    return Math.floor((K - 273.15) *1.8 +32);
}

function renderSearchHistory() {
    historyEl.innerHTML = "";
    for (let i=0; i<searchHistory.length; i++) {
        const historyItem = document.createElement("input");
        // <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"></input>
        historyItem.setAttribute("type","text");
        historyItem.setAttribute("readonly",true);
        historyItem.setAttribute("class", "form-control d-block bg-white");
        historyItem.setAttribute("value", searchHistory[i]);
        historyItem.addEventListener("click",function() {
            getWeather(historyItem.value);
        })
        historyEl.append(historyItem);
    }
}

renderSearchHistory();
if (searchHistory.length > 0) {
    getWeather(searchHistory[searchHistory.length - 1]);
}


//  Save user's search requests and display them underneath search form
//  When page loads, automatically generate current conditions and 5-day forecast for the last city the user searched for

}
initPage();