const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b499ea479de6aae7f84c73be8afdd9ac&units=imperial";

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather);

            let currentTemp = currentWeather.main.temp;
            let windSpeed = currentWeather.wind.speed;
            let windChill;
            let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed, .16)) + 0.4275 *
                currentTemp * (Math.pow(windSpeed, .16));

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = Math.round(windChill);
            }

            document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
            document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';

            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = windChill + '&deg';

            }

        }
    );





let currentTemp;
let windSpeed;
let windChill;
let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed, .16)) + 0.4275 *
    currentTemp * (Math.pow(windSpeed, .16));

if (currentTemp < 50 && windSpeed > 3) {
    windChill = Math.round(windChill);
}

document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';

if (windChill === 0) {
    document.getElementById("windChill").innerHTML = 'N/A';
} else {
    document.getElementById("windChill").innerHTML = windChill + '&deg';

}