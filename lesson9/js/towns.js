//JSON URL
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

//Fetching Data from JSON URL
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject["towns"];
        const cards = document.querySelector(".towncards");
        //Filter for specific towns
        const townfilter = towns.filter(
            (town) =>
            town.name == "Preston" ||
            town.name == "Soda Springs" ||
            town.name == "Fish Haven"
        );
    //Pulling content from json file
    townfilter.forEach((town) => {
        let card = document.createElement("section");
        let title = document.createElement("h2");
        let motto = document.createElement("h3");
        let image = document.createElement("img");
        let year = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");
        let data = document.createElement("div");
        let connect = document.createElement("a");
    
        //Page layout
        title.innerHTML = `${town.name}`;
        motto.innerHTML = `${town.motto}`;
        year.innerHTML = `<br>Year Founded - ${town.yearFounded}`;
        population.innerHTML = `Population - ${town.currentPopulation}`;
        rain.innerHTML = `Annual Rain Fall - ${town.averageRainfall}<br><br>`;
        
        data.setAttribute("class", `data`);
        
        let location = `${town.photo}`;
        let local = location.replace("jpg", "html");
        
        connect.setAttribute("href", local);
        
        image.setAttribute("src", `images/${town.photo}`);
        image.setAttribute("alt", `${town.name}, Idaho`);
        image.setAttribute("loading", "lazy");
        
        connect.append(title);
        connect.append(motto);
        connect.append(data);
        data.append(year);
        data.append(population);
        data.append(rain);
        connect.append(image);
        card.append(connect);
        cards.append(card);
    });
})