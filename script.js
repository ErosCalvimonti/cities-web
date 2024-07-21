const cities = [
    {"name": "New York", "country": "USA", "population": 8336817},
    {"name": "Los Angeles", "country": "USA", "population": 3898747},
    {"name": "Chicago", "country": "USA", "population": 2746388},
    {"name": "Buenos Aires", "country": "Argentina", "population": 2891000},
    {"name": "Córdoba", "country": "Argentina", "population": 1330023},
    {"name": "Rosario", "country": "Argentina", "population": 1193605},
    {"name": "Tokyo", "country": "Japan", "population": 37393128},
    {"name": "Delhi", "country": "India", "population": 30290936},
    {"name": "Shanghai", "country": "China", "population": 27058480},
    {"name": "São Paulo", "country": "Brazil", "population": 22043028},
    {"name": "Mexico City", "country": "Mexico", "population": 21782378},
    {"name": "Cairo", "country": "Egypt", "population": 20484965},
    {"name": "Mumbai", "country": "India", "population": 20411274},
    {"name": "Beijing", "country": "China", "population": 20384000},
    {"name": "Dhaka", "country": "Bangladesh", "population": 20283552},
    {"name": "Karachi", "country": "Pakistan", "population": 15400000},
    {"name": "Istanbul", "country": "Turkey", "population": 15029231},
    {"name": "Moscow", "country": "Russia", "population": 12506468},
    {"name": "Manila", "country": "Philippines", "population": 13923452},
    {"name": "Jakarta", "country": "Indonesia", "population": 10899200},
    {"name": "Lagos", "country": "Nigeria", "population": 14205000},
    {"name": "Kinshasa", "country": "DR Congo", "population": 14900000},
    {"name": "Lima", "country": "Peru", "population": 9674755},
    {"name": "Bangkok", "country": "Thailand", "population": 10539000},
    {"name": "Kolkata", "country": "India", "population": 14850968},
    {"name": "Tehran", "country": "Iran", "population": 8846782},
    {"name": "Bogotá", "country": "Colombia", "population": 7776845},
    {"name": "London", "country": "UK", "population": 8982000},
    {"name": "Hong Kong", "country": "China", "population": 7451000},
    {"name": "Baghdad", "country": "Iraq", "population": 7200000},
    {"name": "Chennai", "country": "India", "population": 11022000},
    {"name": "Riyadh", "country": "Saudi Arabia", "population": 6506700},
    {"name": "Santiago", "country": "Chile", "population": 6814000},
    {"name": "Singapore", "country": "Singapore", "population": 5607283},
    {"name": "Rio de Janeiro", "country": "Brazil", "population": 6748000},
    {"name": "Shenzhen", "country": "China", "population": 12528300},
    {"name": "Seoul", "country": "South Korea", "population": 9776000},
    {"name": "Wuhan", "country": "China", "population": 11212000},
    {"name": "Hyderabad", "country": "India", "population": 10054500},
    {"name": "Ahmedabad", "country": "India", "population": 8251000},
    {"name": "Paris", "country": "France", "population": 11020000},
    {"name": "Lusaka", "country": "Zambia", "population": 3340000},
    {"name": "Khartoum", "country": "Sudan", "population": 5283000},
    {"name": "Johannesburg", "country": "South Africa", "population": 5613000},
    {"name": "Cape Town", "country": "South Africa", "population": 4337000},
    {"name": "Durban", "country": "South Africa", "population": 3442000},
    {"name": "Pretoria", "country": "South Africa", "population": 2921000},
    {"name": "Nairobi", "country": "Kenya", "population": 4397073},
    {"name": "Abidjan", "country": "Côte d'Ivoire", "population": 4765000},
    {"name": "Dar es Salaam", "country": "Tanzania", "population": 7113000},
    {"name": "Addis Ababa", "country": "Ethiopia", "population": 4783000},
    {"name": "Accra", "country": "Ghana", "population": 2272000},
    {"name": "Kampala", "country": "Uganda", "population": 1752000},
    {"name": "Kigali", "country": "Rwanda", "population": 1267000},
    {"name": "Casablanca", "country": "Morocco", "population": 3512000},
    {"name": "Algiers", "country": "Algeria", "population": 3415811},
    {"name": "Fes", "country": "Morocco", "population": 1210000},
    {"name": "Tunis", "country": "Tunisia", "population": 2746000},
    {"name": "Tripoli", "country": "Libya", "population": 1205000},
    {"name": "Ouagadougou", "country": "Burkina Faso", "population": 2453496},
    {"name": "Niamey", "country": "Niger", "population": 1216000},
    {"name": "Lomé", "country": "Togo", "population": 1743000},
    {"name": "Bamako", "country": "Mali", "population": 3221000},
    {"name": "Luanda", "country": "Angola", "population": 8235000},
    {"name": "Gaborone", "country": "Botswana", "population": 231626},
    {"name": "Windhoek", "country": "Namibia", "population": 431000},
    {"name": "Maputo", "country": "Mozambique", "population": 1220000},
    {"name": "Harare", "country": "Zimbabwe", "population": 1742000},
    {"name": "Bujumbura", "country": "Burundi", "population": 1897000},
    {"name": "Djibouti", "country": "Djibouti", "population": 562000},
    {"name": "Asmara", "country": "Eritrea", "population": 963000},
    {"name": "Libreville", "country": "Gabon", "population": 703939},
    {"name": "Malabo", "country": "Equatorial Guinea", "population": 297000},
    {"name": "Nouakchott", "country": "Mauritania", "population": 1119000},
    {"name": "Conakry", "country": "Guinea", "population": 2049000},
    {"name": "Dakar", "country": "Senegal", "population": 1038000},
    {"name": "Monrovia", "country": "Liberia", "population": 1010970},
    {"name": "Freetown", "country": "Sierra Leone", "population": 1113200},
    {"name": "Antananarivo", "country": "Madagascar", "population": 1707000},
    {"name": "Port Louis", "country": "Mauritius", "population": 149194},
    {"name": "Moroni", "country": "Comoros", "population": 111329},
    {"name": "Victoria", "country": "Seychelles", "population": 27508},
    {"name": "Mbabane", "country": "Eswatini", "population": 94500},
    {"name": "Sao Tome", "country": "Sao Tome and Principe", "population": 71947},
    {"name": "Juba", "country": "South Sudan", "population": 525953},
    {"name": "Brazzaville", "country": "Republic of the Congo", "population": 1875000},
    {"name": "Bangui", "country": "Central African Republic", "population": 889231},
    {"name": "N'Djamena", "country": "Chad", "population": 1201403},
    {"name": "Khartoum", "country": "Sudan", "population": 5283000},
    {"name": "Mogadishu", "country": "Somalia", "population": 2761000}
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
