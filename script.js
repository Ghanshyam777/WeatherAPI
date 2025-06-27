const API_KEY = '4db9eba1ed25401f83172421252606';

function getWeather() {
  const location = document.getElementById('locationInput').value;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.current.temp_c;
      const wind = data.current.wind_kph;
      document.getElementById('weatherResult').innerHTML =
        `<strong>${data.location.name}</strong><br>
         Temperature: ${temp}°C<br>
         Wind Speed: ${wind} kph`;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = "Error: " + error.message;
    });
}
