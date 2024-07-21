const cities = [
    // USA
    {"name": "New York", "country": "USA", "state": "New York", "population": 8336817},
    {"name": "Los Angeles", "country": "USA", "state": "California", "population": 3898747},
    {"name": "Chicago", "country": "USA", "state": "Illinois", "population": 2746388},
    {"name": "Houston", "country": "USA", "state": "Texas", "population": 2310000},

    // Argentina
    {"name": "Buenos Aires", "country": "Argentina", "state": "Buenos Aires", "population": 2891000},
    {"name": "Córdoba", "country": "Argentina", "state": "Córdoba", "population": 1330023},
    {"name": "Rosario", "country": "Argentina", "state": "Santa Fe", "population": 1193605},
    {"name": "Mendoza", "country": "Argentina", "state": "Mendoza", "population": 1150418},

    // Japan
    {"name": "Tokyo", "country": "Japan", "state": "Tokyo", "population": 37393128},
    {"name": "Osaka", "country": "Japan", "state": "Osaka", "population": 19222665},
    {"name": "Kyoto", "country": "Japan", "state": "Kyoto", "population": 1474570},
    {"name": "Yokohama", "country": "Japan", "state": "Kanagawa", "population": 3726167},

    // India
    {"name": "Delhi", "country": "India", "state": "Delhi", "population": 30290936},
    {"name": "Mumbai", "country": "India", "state": "Maharashtra", "population": 20411274},
    {"name": "Bangalore", "country": "India", "state": "Karnataka", "population": 8443675},
    {"name": "Chennai", "country": "India", "state": "Tamil Nadu", "population": 11022000},

    // China
    {"name": "Shanghai", "country": "China", "state": "Shanghai", "population": 27058480},
    {"name": "Beijing", "country": "China", "state": "Beijing", "population": 20384000},
    {"name": "Guangzhou", "country": "China", "state": "Guangdong", "population": 18812700},
    {"name": "Shenzhen", "country": "China", "state": "Guangdong", "population": 12528300},

    // Brazil
    {"name": "São Paulo", "country": "Brazil", "state": "São Paulo", "population": 22043028},
    {"name": "Rio de Janeiro", "country": "Brazil", "state": "Rio de Janeiro", "population": 6748000},
    {"name": "Brasília", "country": "Brazil", "state": "Distrito Federal", "population": 3015268},
    {"name": "Salvador", "country": "Brazil", "state": "Bahia", "population": 2677000},

    // Mexico
    {"name": "Mexico City", "country": "Mexico", "state": "CDMX", "population": 21782378},
    {"name": "Guadalajara", "country": "Mexico", "state": "Jalisco", "population": 1503139},
    {"name": "Monterrey", "country": "Mexico", "state": "Nuevo León", "population": 1135512},
    {"name": "Puebla", "country": "Mexico", "state": "Puebla", "population": 1682407},

    // Egypt
    {"name": "Cairo", "country": "Egypt", "state": "Cairo", "population": 20484965},
    {"name": "Alexandria", "country": "Egypt", "state": "Alexandria", "population": 5194000},
    {"name": "Giza", "country": "Egypt", "state": "Giza", "population": 8743000},
    {"name": "Shubra El-Kheima", "country": "Egypt", "state": "Qalyubia", "population": 11216000},

    // Russia
    {"name": "Moscow", "country": "Russia", "state": "Moscow", "population": 12506468},
    {"name": "Saint Petersburg", "country": "Russia", "state": "Leningrad", "population": 5383968},
    {"name": "Novosibirsk", "country": "Russia", "state": "Novosibirsk", "population": 1625600},
    {"name": "Yekaterinburg", "country": "Russia", "state": "Sverdlovsk", "population": 1483119},

    // UK
    {"name": "London", "country": "UK", "state": "England", "population": 8982000},
    {"name": "Birmingham", "country": "UK", "state": "England", "population": 1141816},
    {"name": "Leeds", "country": "UK", "state": "England", "population": 793139},
    {"name": "Glasgow", "country": "UK", "state": "Scotland", "population": 635640},

    // Germany
    {"name": "Berlin", "country": "Germany", "state": "Berlin", "population": 3669491},
    {"name": "Hamburg", "country": "Germany", "state": "Hamburg", "population": 1841179},
    {"name": "Munich", "country": "Germany", "state": "Bavaria", "population": 1471508},
    {"name": "Cologne", "country": "Germany", "state": "North Rhine-Westphalia", "population": 1080394},

    // France
    {"name": "Paris", "country": "France", "state": "Île-de-France", "population": 11020000},
    {"name": "Marseille", "country": "France", "state": "Provence-Alpes-Côte d'Azur", "population": 861635},
    {"name": "Lyon", "country": "France", "state": "Auvergne-Rhône-Alpes", "population": 513275},
    {"name": "Toulouse", "country": "France", "state": "Occitanie", "population": 471941},

    // Italy
    {"name": "Rome", "country": "Italy", "state": "Lazio", "population": 2872800},
    {"name": "Milan", "country": "Italy", "state": "Lombardy", "population": 1366180},
    {"name": "Naples", "country": "Italy", "state": "Campania", "population": 962003},
    {"name": "Turin", "country": "Italy", "state": "Piedmont", "population": 870456},

    // Australia
    {"name": "Sydney", "country": "Australia", "state": "New South Wales", "population": 5312163},
    {"name": "Melbourne", "country": "Australia", "state": "Victoria", "population": 5078193},
    {"name": "Brisbane", "country": "Australia", "state": "Queensland", "population": 2514184},
    {"name": "Perth", "country": "Australia", "state": "Western Australia", "population": 2109164},

    // Canada
    {"name": "Toronto", "country": "Canada", "state": "Ontario", "population": 2731571},
    {"name": "Montreal", "country": "Canada", "state": "Quebec", "population": 1704694},
    {"name": "Vancouver", "country": "Canada", "state": "British Columbia", "population": 631486},
    {"name": "Calgary", "country": "Canada", "state": "Alberta", "population": 1239220},

    // Spain
    {"name": "Madrid", "country": "Spain", "state": "Madrid", "population": 3223334},
    {"name": "Barcelona", "country": "Spain", "state": "Catalonia", "population": 1620343},
    {"name": "Valencia", "country": "Spain", "state": "Valencia", "population": 791413},
    {"name": "Seville", "country": "Spain", "state": "Andalusia", "population": 688711},

    // South Africa
    {"name": "Johannesburg", "country": "South Africa", "state": "Gauteng", "population": 5613000},
    {"name": "Cape Town", "country": "South Africa", "state": "Western Cape", "population": 4337000},
    {"name": "Durban", "country": "South Africa", "state": "KwaZulu-Natal", "population": 3442361},
    {"name": "Pretoria", "country": "South Africa", "state": "Gauteng", "population": 741651},

    // Nigeria
    {"name": "Lagos", "country": "Nigeria", "state": "Lagos", "population": 13900000},
    {"name": "Kano", "country": "Nigeria", "state": "Kano", "population": 3659000},
    {"name": "Ibadan", "country": "Nigeria", "state": "Oyo", "population": 3565108},
    {"name": "Abuja", "country": "Nigeria", "state": "FCT", "population": 1235880},

    // Indonesia
    {"name": "Jakarta", "country": "Indonesia", "state": "DKI Jakarta", "population": 10770487},
    {"name": "Surabaya", "country": "Indonesia", "state": "East Java", "population": 2886676},
    {"name": "Bandung", "country": "Indonesia", "state": "West Java", "population": 2631235},
    {"name": "Medan", "country": "Indonesia", "state": "North Sumatra", "population": 2525162},

    // Pakistan
    {"name": "Karachi", "country": "Pakistan", "state": "Sindh", "population": 15741000},
    {"name": "Lahore", "country": "Pakistan", "state": "Punjab", "population": 12085000},
    {"name": "Faisalabad", "country": "Pakistan", "state": "Punjab", "population": 3203846},
    {"name": "Rawalpindi", "country": "Pakistan", "state": "Punjab", "population": 2200000},

    // Bangladesh
    {"name": "Dhaka", "country": "Bangladesh", "state": "Dhaka", "population": 21294410},
    {"name": "Chittagong", "country": "Bangladesh", "state": "Chittagong", "population": 3920222},
    {"name": "Khulna", "country": "Bangladesh", "state": "Khulna", "population": 663342},
    {"name": "Rajshahi", "country": "Bangladesh", "state": "Rajshahi", "population": 763952},

    // Turkey
    {"name": "Istanbul", "country": "Turkey", "state": "Istanbul", "population": 15067724},
    {"name": "Ankara", "country": "Turkey", "state": "Ankara", "population": 5445000},
    {"name": "Izmir", "country": "Turkey", "state": "Izmir", "population": 4320519},
    {"name": "Bursa", "country": "Turkey", "state": "Bursa", "population": 2901396},

    // South Korea
    {"name": "Seoul", "country": "South Korea", "state": "Seoul", "population": 9733509},
    {"name": "Incheon", "country": "South Korea", "state": "Incheon", "population": 2957026},
    {"name": "Daegu", "country": "South Korea", "state": "Daegu", "population": 2431254}
];


const searchInput = document.getElementById('searchInput');
const cityList = document.getElementById('cityList');

function displayCities(cities) {
    cityList.innerHTML = cities.map(city => 
        `<li>
            <div>
                <span class="city-name">${city.name}, ${city.country}</span>
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
