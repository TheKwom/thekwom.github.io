const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=b499ea479de6aae7f84c73be8afdd9ac&units=imperial";

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather);

            let currentTemp = currentWeather.main.temp;
            let currently = currentWeather.weather[0].main;
            let high = currentWeather.main.temp_max;
            let humidity = currentWeather.main.humidity;
            let windSpeed = currentWeather.wind.speed;
            let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed, .16)) + 0.4275 *
                currentTemp * (Math.pow(windSpeed, .16));
            windChill = windChill.toFixed(2);

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = Math.round(windChill);
            }

            document.getElementById("current").innerHTML = currently;
            document.getElementById("high").innerHTML = high + '&degF';
            document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';
            document.getElementById("humidity").innerHTML = humidity;

            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = windChill + '&degF';

            }

        }
    );