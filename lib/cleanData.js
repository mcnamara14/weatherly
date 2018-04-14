//will pass whole data fetch
function cleanCurrentWeather({current_observation, forecast, hourly_forecast}) {
  // const currentWeather = {
  return {}  
    city: data.current_observation.display_location.city,
    state: data.current_observation.display_location.state_name,
    temp: data.current_observation.temp_f,
    currentCondition: data.current_observation.weather,
    highTemp: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
    lowTemp: data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
    uv: data.current_observation.UV,
    feelsLike: data.current_observation.feelslike_f,
    windSpeed: data.current_observation.wind_mph,
    precipitation: parseInt(data.current_observation.precip_today_in).toFixed(0),
    visibility: parseInt(data.current_observation.visibility_mi).toFixed(0),
    dewpoint: data.current_observation.dewpoint_f,
  }

  // return currentWeather
}


// export default function weatherData(data) {
//   const currentWeatherData = cleanCurrentWeather(data);

//   return currentWeatherData
// }
