const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b499ea479de6aae7f84c73be8afdd9ac&units=imperial";

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            //DEBUG:
            console.log(forecasts);

            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrow.getDate() + 1);

                let dateString =
                    // get full year
                    tomorrowDate.getFullYear() + '-' +

                    // get month
                    (tomorrowDate.getMonth() + 1) + '-' +

                    // get day
                    tomorrowDate.getDate();

                let hourString = '18:00:00'

            //LOOP THROUGH RESULTS
                
                forecasts.list.forEach(
                    (forecast) => {
                        if(forecast.dt_text.includes(dateString) && 
                           forecast.dt_text.includes(hourString)) {
                               console.log(forecast.main.temp);

                               const element = document.getElementById('temp${counter}');
                               element.innerHTML = forecast.main.temp + '&deg;';

                               counter += 1;
                    }
                }
                );
            }
    );