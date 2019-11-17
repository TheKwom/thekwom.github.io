const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;

                    towns.forEach(
                        (town) => {
                            if (town.name.toLowerCase() === 'fish haven') {
                                // Fish Haven
                                document.querySelector('#fishHavenYearFounded')
                                    .textContent = town.yearFounded;

                                document.querySelector('#fishHavenMotto')
                                    .textContent = town.motto;

                                document.querySelector("#fishHavenPopulation")
                                    .textContent = town.currentPopulation;

                                document.querySelector('fishHavenRainFall')
                                    .textContent = town.averageRainfall;

                                document.querySelector('#fishHavenImage')
                                    .setAttribute('src', 'images/' + town.photo);
                            }
                            else if (town.name.toLowerCaser() === 'preston') {
                                // Preston
                                document.querySelector('#prestonYearFounded')
                                    .textContent = town.yearFounded;
                            }
                            else if (town.name.toLowerCaser() === 'soda springs') {
                                // Soda Springs
                                document.querySelector('#sodaSpringsYearFounded')
                                    .textContent = town.yearFounded;
                            }
                        }
                    );
                }
            )
    });