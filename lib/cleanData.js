function cleanCurrentWeather(data) {
  console.log(data)
  const currentWeather = {
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

  return currentWeather
}

// function cleanSevenHourWeather(data) {
//   const hourlyForecast = props.hourly.slice(0,7);
//   const hours = hourlyForecast.map(hour => {
//     if (hour.FCTTIME.hour < 12) {
//         return {
//                 hour: hour.FCTTIME.hour,
//                 ampm: 'AM'
//                 }
//     } else if (hour.FCTTIME.hour > 12) {
//         hour.FCTTIME.hour -= 12;
//         return {
//           hour: hour.FCTTIME.hour,
//           ampm: 'PM'
//           }
//     } else {
//         return {
//           hour: hour.FCTTIME.hour,
//           ampm: 'PM'
//           }
//     }
//   const sevenHourWeather = {
    
//   }
// }

export default function weatherData(data) {
  const currentWeatherData = cleanCurrentWeather(data);

  return currentWeatherData
}


// export default function cleanData(data) {
//  const currentWeather = cleanCurrentWeather(data);

//  return currentWeather;
// }


// currentTemperature: data.current_observation.temp_f, 
// -        currentCondition: data.current_observation.weather,
// -        highTemp: data.forecast.simpleforecast.forecastday[3].high.fahrenheit,
// -        lowTemp: data.forecast.simpleforecast.forecastday[3].low.fahrenheit,
// -        UV: data.current_observation.UV,
// -        feelsLike: data.current_observation.feelslike_f,
// -        windSpeed: data.current_observation.wind_mph,
// -        precipitation: parseInt(data.current_observation.precip_today_in).toFixed(0),
// -        visibility: parseInt(data.current_observation.visibility_mi).toFixed(0),
// -        dewpoint: data.current_observation.dewpoint_f,
// -        todaysWeather: data.forecast.txt_forecast.forecastday[0].fcttext_metric,
// -        day: data.forecast.simpleforecast.forecastday[0].date.weekday,
// -        dateMonth: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
// -        dateDay: data.forecast.simpleforecast.forecastday[0].date.day,
// -        dateYear: data.forecast.simpleforecast.forecastday[0].date.year,
// -        time: data.forecast.txt_forecast.date,
// +        current_observation: data.current_observation,
// +        forecast: data.forecast,