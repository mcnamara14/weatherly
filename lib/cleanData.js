export default function Clean({ current_observation, forecast, hourly_forecast }) {
  
    return {
      current: {
        feelsLike:        current_observation.feelslike_f,
        uv:               current_observation.UV,
        windSpeed:        current_observation.wind_mph,
        precipitation:    parseInt(current_observation.precip_today_in).toFixed(0),
        visibility:       parseInt(current_observation.visibility_mi).toFixed(0),
        dewpoint:         current_observation.dewpoint_f,
        currentCondition: current_observation.weather, 
        temp:             current_observation.temp_f,
        state:            current_observation.display_location.state_name,
        city:             current_observation.display_location.city
      },
      
      forecast: {
        highTemp:         forecast.simpleforecast.forecastday[3].high.fahrenheit,
        lowTemp:          forecast.simpleforecast.forecastday[3].low.fahrenheit,
        day:              forecast.simpleforecast.forecastday[0].date.weekday,
        month:            forecast.simpleforecast.forecastday[0].date.monthname_short,
        dayInteger:       forecast.simpleforecast.forecastday[0].date.day,
        year:             forecast.simpleforecast.forecastday[0].date.year,
        weatherMessage:   forecast.txt_forecast.forecastday[0].fcttext_metric,
        tenDayArray:      forecast.simpleforecast.forecastday
      },

      hourly:             hourly_forecast
    }
}
    //currently slicing first 7 objects in **hourly** array
    //will pull entire array to set up for dynamice time return
    //need these keys from the objects in this array
      // FCTTIME.civil (full time format with am or pm)
      // FCTTIME.ampm
      // temp.english
