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
            let currentImageIcon = currentWeather.weather[0].icon;
            let currentImage = 'https://openweathermap.org/img/w/' +
                currentImageIcon +
                '.png';

            document.querySelector('#current-temp')
                .textContent = currentTemp;

            document.querySelector('#imagesrc')
                .textContent = currentImage;

            document.querySelector('#weather-icon')
                .setAttribute('src', currentImage);
        }
    )