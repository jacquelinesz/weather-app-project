// Current Date
let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let todaysDate = document.querySelector("#date");
todaysDate.innerHTML = `${hour}:${minute}  ${day} ${month} ${date}`;

// Search Engine
function displayWeather(response) {
  document.querySelector("h3").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}`;
}
function searchCity(city) {
  let apiKey = "76d0559014924b2832f0da4360ab36f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;
  searchCity(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", enterCity);

function currentLocation(position) {
  let apiKey = "76d0559014924b2832f0da4360ab36f0";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}
let button = document.querySelector("#current-location-button");
button.addEventListener("click", getCurrentPosition);
searchCity("Charlotte");
