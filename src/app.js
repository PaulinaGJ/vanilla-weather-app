function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#condition");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let mainIconElement = document.querySelector("#main-icon");
  mainIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  mainIconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "9deff0d49319322e8b7031db0c883dd7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);

//Date
let currentDate = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dateElement = document.querySelector("#date");
dateElement.innerHTML = `${day}, ${hour}:${minutes}`;
