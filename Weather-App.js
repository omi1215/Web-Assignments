$(document).ready(function() {
    const searchBtn = $('#searchBtn');
    const weather_img = $('.weather-img');
    const temperature = $('.temperature');
    const description = $('.description');
    const humidityValue = $('#humidity-value');
    const windSpeedValue = $('#wind-speed-value');
    const location_not_found = $('.location-not-found');
    const weather_body = $('.weather-body');

    function checkWeather(city) {
        const api_key = "a323bfe86e1dfc2bf566902bf6cd1241";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        $.getJSON(url, function(weather_data) {
            if (weather_data.cod === '404') {
                location_not_found.css('display', 'flex');
                weather_body.css('display', 'none');
                console.log("error");
                return;
            }

            console.log("run");
            location_not_found.css('display', 'none');
            weather_body.css('display', 'flex');
            temperature.html(`${Math.round(weather_data.main.temp - 273.15)}°C`);
            description.html(`${weather_data.weather[0].description}`);
            humidityValue.html(`${weather_data.main.humidity}%`);
            windSpeedValue.html(`${weather_data.wind.speed}Km/H`);

            switch (weather_data.weather[0].main) {
                case 'Clouds':
                    weather_img.attr('src', '/Weather-App-Assets/cloud.png');
                    break;
                case 'Clear':
                    weather_img.attr('src', '/Weather-App-Assets/clear.png');
                    break;
                case 'Rain':
                    weather_img.attr('src', '/Weather-App-Assets/rain.png');
                    break;
                case 'Mist':
                    weather_img.attr('src', '/Weather-App-Assets/mist.png');
                    break;
                case 'Snow':
                    weather_img.attr('src', '/Weather-App-Assets/snow.png');
                    break;
            }

            console.log(weather_data);
        });
    }

    searchBtn.on('click', function() {
        checkWeather($('.location').val());
    });
});