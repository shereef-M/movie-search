const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const icon = document.querySelector("#icon");

const getWeather = async () => {
  try {
    const city = cityInput.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3127bfdb6c360756c2f836756716e64&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    cityName.textContent = data.name;
    temperature.textContent = `${data.main.temp}°C`;
    weather.textContent = data.weather[0].description;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    cityName.textContent = "City not found. Please try again.";
  }
};
searchBtn.addEventListener("click", getWeather);
