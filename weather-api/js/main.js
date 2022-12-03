let longitude = "1.360321";
let latitude = "103.846733";

function loadSite () {
  if (navigator.geolocation) { // device can return its location
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getWeather();
    });
  }
}

function getWeather () {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cc5ee725bb6f6345089bd12b5e96b9cc`
    console.log(url);
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      switch(json.weather[0].main){
        case "Rain":
          document.body.style.backgroundImage = "url('./img/rainy.jpg')";
          break;
        case "Clouds":
          document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
          break;
        case "Clear":
          document.body.style.backgroundImage = "url('./img/clear.jpg')";
          break;
        default:
          document.body.style.backgroundImage = "url('./img/fair.jpg')";
          break;
      }
  
      document.getElementById("temperature").innerHTML = Math.round((json.main.temp-273.15)*10)/10 + "°C";
      document.getElementById("location").innerHTML = json.name;
      document.getElementById("description").innerHTML = json.weather[0].description;
      document.getElementById("data_city").innerHTML = json.name;
      document.getElementById("data_temperature").innerHTML = Math.round((json.main.temp-273.15)*10)/10 + "°C";
      document.getElementById("data_humidity").innerHTML = json.main.humidity + "%";
      document.getElementById("data_wind_speed").innerHTML = json.wind.speed + "m/s";
      document.getElementById("data_wind_direction").innerHTML = json.wind.deg + "º";
      document.getElementById("data_pressure").innerHTML = json.main.pressure + "hPa";
      document.getElementById("data_sunrise").innerHTML = new Date(json.sys.sunrise*1000).toLocaleTimeString();
      document.getElementById("data_sunset").innerHTML = new Date(json.sys.sunset*1000).toLocaleTimeString();
    });
  }