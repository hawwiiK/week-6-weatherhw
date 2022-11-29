function oldDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let presentDate = document.querySelector("#date");
let currentTime = new Date();
presentDate.innerHTML = oldDate(currentTime);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

function showPosition(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let h1 = document.querySelector("#City");
  h1.innerHTML = `${city}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}`;
}
function clickCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  console.log(city);
  let h1 = document.querySelector("#City");
  h1.innerHTML = `${city}`;
  let apiKey = "d7897e5f06347bde1b52647ada6bc603";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let formSearch = document.querySelector("#search-form");
formSearch.addEventListener("submit", clickCity);
