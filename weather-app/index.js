const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click" , getInformation);

async function getInformation(){

    const searchedCity = cityInput.value;
    
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchedCity}&count=1&language=en&format=json`);
    
    const data = await response.json();


    const latitude = data.results[0].latitude;

    const longitude = data.results[0].longitude;

    console.log(latitude);
    console.log(longitude);

    const weatherinfo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
    
    const weatherdata = await weatherinfo.json();

    result.textContent = weatherdata.current.temperature_2m;

}