const cityInput = document.getElementById("city-input");

const searchBtn = document.getElementById("search-btn");

const result = document.getElementById("result");

searchBtn.addEventListener("click", getInformation);

// type city name and click enter to start searching

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getInformation();
    }
});

async function getInformation() {
    const searchedCity = cityInput.value.trim();

    if (searchedCity.length === 0) {
        alert("Enter a city to search");
        return;
    }

    if (!/^[a-zA-Z ]+$/.test(searchedCity)) {
        alert("Numbers or special characters are not allowed");
        return;
    }

    result.textContent = "Loading.....";

    cityInput.value = "";

    // error handling for network issue etc etc

    try {
        // Get latitude and longitude

        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${searchedCity}&count=1&language=en&format=json`
        );

        const data = await response.json();

        // City not found

        if (!data.results || data.results.length === 0) {
            result.textContent = "City not found";
            return;
        }

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;

        console.log(latitude);
        console.log(longitude);

        // Get weather using coordinates

        const weatherinfo = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
        );

        const weatherdata = await weatherinfo.json();

        const weather_codes = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Depositing rime fog",
            51: "Drizzle: Light intensity",
            53: "Drizzle: Moderate intensity",
            55: "Drizzle: Dense intensity",
            56: "Freezing drizzle: Light intensity",
            57: "Freezing drizzle: Dense intensity",
            61: "Rain: Slight intensity",
            63: "Rain: Moderate intensity",
            65: "Rain: Heavy intensity",
            66: "Freezing rain: Light intensity",
            67: "Freezing rain: Heavy intensity",
            71: "Snow fall: Slight intensity",
            73: "Snow fall: Moderate intensity",
            75: "Snow fall: Heavy intensity",
            77: "Snow grains",
            80: "Rain showers: Slight intensity",
            81: "Rain showers: Moderate intensity",
            82: "Rain showers: Violent",
            85: "Snow showers: Slight",
            86: "Snow showers: Heavy",
            95: "Thunderstorm: Slight or moderate",
            96: "Thunderstorm with slight hail",
            99: "Thunderstorm with heavy hail"
        };

        const weather_icons = {
            0: "☀️",
            1: "🌤️",
            2: "⛅",
            3: "☁️",
            45: "🌫️",
            48: "🌫️",
            51: "🌦️",
            53: "🌦️",
            55: "🌧️",
            56: "🌨️",
            57: "🌨️",
            61: "🌧️",
            63: "🌧️",
            65: "🌧️",
            66: "🌨️",
            67: "🌨️",
            71: "🌨️",
            73: "❄️",
            75: "❄️",
            77: "❄️",
            80: "🌦️",
            81: "🌧️",
            82: "🌧️",
            85: "🌨️",
            86: "❄️",
            95: "⛈️",
            96: "⛈️",
            99: "⛈️"
        };

        result.innerHTML = `
            <div class="weather-card">
                City: ${searchedCity}<br>
                Temperature: ${weatherdata.current.temperature_2m} °C<br>
                Humidity: ${weatherdata.current.relative_humidity_2m} %<br>
                Wind Speed: ${weatherdata.current.wind_speed_10m} ${weatherdata.current_units.wind_speed_10m}<br>
                Weather: ${weather_codes[weatherdata.current.weather_code]} ${weather_icons[weatherdata.current.weather_code]}
            </div>
        `;

    } catch (error) {
        result.textContent = "Something went wrong. Please try again.";
    }
}