//JSON URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Fetching Data from JSON URL
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const cards = document.querySelector('.towncards');
        //Filter for specific towns
        const townfilter = towns.filter(
            (town) =>
            town.name == 'Preston' ||
            town.name == 'Soda Springs' ||
            town.name == 'Fish Haven'
        );
    //Pulling content from json file
    townfilter.forEach((town) => {
        let card = document.createElement('section');
        let heading = document.createElement('div');
        let title = document.createElement('h2');
        let motto = document.createElement('h3');
        let image = document.createElement('img');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let info = document.createElement('div');
        let connect = document.createElement('a');
    
        //Page layout
        title.innerHTML = `${town.name}`;
        motto.innerHTML = `${town.motto}`;
        year.innerHTML = `<br>Year Founded - ${town.yearFounded}`;
        population.innerHTML = `Population - ${town.currentPopulation}`;
        rain.innerHTML = `Annual Rain Fall - ${town.averageRainfall}'<br><br>`;
        
        //Adding class
        info.setAttribute('class', `info`);
        heading.setAttribute('class', 'title');
        
        //Image call from local file
        let location = `${town.photo}`;
        let local = location.replace('jpg', 'html');
        
        connect.setAttribute('href', local);
        
        image.setAttribute('src', `images/${town.photo}`);
        image.setAttribute('alt', `${town.name}, Idaho`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('class', 'imgCard');
        
        //Building section
        connect.append(heading);
        heading.append(title);
        heading.append(motto);
        connect.append(info);
        info.append(year);
        info.append(population);
        info.append(rain);
        connect.append(image);
        card.append(connect);
        cards.append(card);
    });
})

    /* Preston Events */

    const prestonEventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

    fetch(prestonEventURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (prestonObject) {
            const towns = prestonObject['towns'];
            for (let i = 0; i < towns.length; i++) {
                if (towns[i].name == 'Preston') {
                    let preston = document.createElement('div');
                    for (let x = 0; x < towns[i].events.length; x++) {
                        let info = document.createElement('p');
                        info.textContent = towns[i].events[x];
                        preston.appendChild(info);
                        document.getElementById('preston').appendChild(preston);
                    }
                }
            }

        })