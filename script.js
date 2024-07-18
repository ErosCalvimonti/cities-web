const cities = [
    { name: "New York", country: "USA", population: 8336817 },
    { name: "Los Angeles", country: "USA", population: 3898747 },
    { name: "Chicago", country: "USA", population: 2746388 },
    { name: "Buenos Aires", country: "Argentina", population: 2891000 },
    { name: "Córdoba", country: "Argentina", population: 1330023 },
    { name: "Rosario", country: "Argentina", population: 1193605 },
    { name: "Tokyo", country: "Japan", population: 37393128 },
    { name: "Delhi", country: "India", population: 30290936 },
    { name: "Shanghai", country: "China", population: 27058480 },
    { name: "São Paulo", country: "Brazil", population: 22043028 },
    { name: "Mexico City", country: "Mexico", population: 21782378 },
    { name: "Cairo", country: "Egypt", population: 20484965 },
    { name: "Mumbai", country: "India", population: 20411274 },
    { name: "Beijing", country: "China", population: 20384000 },
    { name: "Dhaka", country: "Bangladesh", population: 20283552 }
];

const searchInput = document.getElementById('searchInput');
const cityList = document.getElementById('cityList');

function displayCities(cities) {
    cityList.innerHTML = cities.map(city => 
        `<li>
            <div>
                <span class="city-name">${city.name}</span>
                <span class="city-info">, ${city.country}</span>
            </div>
            <span class="city-population">
                <i class="fas fa-users"></i> ${city.population.toLocaleString()}
            </span>
        </li>`
    ).join('');
}

function filterCities(searchText) {
    return cities.filter(city => 
        city.name.toLowerCase().includes(searchText.toLowerCase()) ||
        city.country.toLowerCase().includes(searchText.toLowerCase())
    );
}

searchInput.addEventListener('input', (e) => {
    const filteredCities = filterCities(e.target.value);
    displayCities(filteredCities);
});

// Initial display of all cities
displayCities(cities);
