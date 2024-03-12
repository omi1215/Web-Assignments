const inputBox = document.querySelector('.location');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidityValue = document.getElementById('humidity-value'); // Changed from 'humidity'
const windSpeedValue = document.getElementById('wind-speed-value'); // Changed from 'wind-speed'

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "a323bfe86e1dfc2bf566902bf6cd1241";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidityValue.innerHTML = `${weather_data.main.humidity}%`; // Changed to humidityValue
    windSpeedValue.innerHTML = `${weather_data.wind.speed}Km/H`; // Changed to windSpeedValue

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/Weather-App-Assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/Weather-App-Assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/Weather-App-Assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/Weather-App-Assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/Weather-App-Assets/snow.png";
            break;
    }

    console.log(weather_data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
