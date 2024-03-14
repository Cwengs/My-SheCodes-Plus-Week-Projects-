function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateELement.innerHTML = formatDate(currentDate);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let units = "metric";
let city = document.querySelector("#current-city").textContent;
let temperature = document.querySelector("#current-temperature-value");
let description = document.querySelector("#weather-description");
let apiKey = "34b84ca9710baa6a1c25cet48o6efff9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displaytemperature(response) {
  console.log(response.data.current.temperature);
  temperature.innerHTML = `${response.data.current.temperature}°C`;
  description.innerHTML = response.data.current.weather_descriptions[0];
}

axios.get(apiUrl).then(displaytemperature);
