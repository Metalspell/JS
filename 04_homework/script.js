let cityId = 709930;
function citySelect() {
  cityId = document.querySelector('.city-id');
  cityId = +cityId.value;
  getWeather();
}


function getWeather() {
  fetch("http://api.openweathermap.org/data/2.5/weather?id="+cityId+"&appid=b078a7d81849e7d2b796924e54583a40")
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      console.log(data);
      let cityId = document.querySelector('.city-id');
      // document.querySelector('.city-name').textContent = data.name;
      document.querySelector('.temperature').innerHTML = `Current temperature:      <span>${Math.round(data.main.temp - 273)}&deg;</span>`;
      document.querySelector('.max').innerHTML = `Maximal temperature:      <span>${Math.round(data.main.temp_max - 273)}&deg;</span>`;
      document.querySelector('.min').innerHTML = `Minimal temperature:      <span>${Math.round(data.main.temp_min - 273)}&deg;</span>`;
      document.querySelector('.feel').innerHTML = `Feels like:      <span>${Math.round(data.main.feels_like - 273)}&deg;</span>`;
      document.querySelector('.clouds').innerHTML = `Cloudiness:     <span>${data.weather[0]['description']}</span>`;
      document.querySelector('.visibility').innerHTML = `Visibility:     <span>${data.visibility}</span>`;
      document.querySelector('.wind-speed').innerHTML = `Wind speed:      <span> ${data.wind.speed}m/s</span>`;
      // document.querySelector('.clouds-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      // document.querySelector('.preasure').innerHTML = `Preasure:     <span>${data.main.pressure}<span>`;
      document.querySelector('.humidity').innerHTML = `Humidity:      ${data.main.humidity}&#37;`;
    })
    .catch(function () {
      // catch any errors
    });
}
getWeather();
