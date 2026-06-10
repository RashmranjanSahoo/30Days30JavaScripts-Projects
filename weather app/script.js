const apiKey = "f1f163fa41629c11158ab6a22739ba8f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist" ||
        data.weather[0].main === "Fog" ||
        data.weather[0].main === "Haze") {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    else {
        weatherIcon.src = "images/clear.png";
    }

}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
checkWeather("bangalore")