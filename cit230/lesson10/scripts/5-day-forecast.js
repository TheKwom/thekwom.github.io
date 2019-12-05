var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

// create five day forecast
//let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    // add one day to current day
    currentDay++;

    // if current day is greater than 6 (Saturday), reset it to 0 (Sunday)
    if (currentDay > 6) {
        currentDay = 0;
    }

    // assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);
    // const element = document.getElementById('day' + i);

    element.innerHTML = daysOfWeek[currentDay];
}


// API


const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b499ea479de6aae7f84c73be8afdd9ac&units=imperial";

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            //DEBUG:
            console.log(forecasts);

            let nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1);
            let dateString = getDateString(nextDate);
            let hourString = '18:00:00'
            let counter = 1;

            //LOOP THROUGH RESULTS
                
                forecasts.list.forEach(
                    (forecast) => {
                        if(forecast.dt_text.includes(dateString) && 
                           forecast.dt_text.includes(hourString)) {
                               console.log(forecast.main.temp);

                               const element = document.querySelector(`temp${counter}`);
                               element.innerHTML = forecast.main.temp + '&deg;';

                               counter += 1;
                    }
                }
                );
            }
    );

    function getDateString(date) {
        let dateString =
        // get full year
        date.getFullYear() + '-' +

        // get month
        (date.getMonth() + 1) + '-' +

        // get day
        date.getDate();

    return dateString;
    }