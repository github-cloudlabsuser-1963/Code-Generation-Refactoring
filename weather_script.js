const fetch = require("node-fetch");

const API_KEY = "YOUR_API_KEY"; // Reemplaza con tu clave de API
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Weather in ${data.name}, ${data.sys.country}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log(`Description: ${data.weather[0].description}`);
            console.log(`Humidity: ${data.main.humidity}%`);
            console.log(`Wind Speed: ${data.wind.speed} m/s`);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error.message);
        });
}

// Interfaz para usar desde la consola
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Weather App!");
console.log("Type the name of a city to get the current weather.");
console.log("Type 'exit' to quit.");

rl.on("line", (input) => {
    if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
        return;
    }

    getWeather(input);
});