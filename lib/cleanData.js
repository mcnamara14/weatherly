export default function Clean({ current_observation, forecast, hourly_forecast }) {
  
    return {
      current: {
        currentWeatherDetails:
        [
          {prop: current_observation.feelslike_f, name: 'Feels like'},
          {prop: current_observation.UV,          name: 'UV Index'},
          {prop: current_observation.wind_mph,    name: 'Wind'},
          {prop: parseInt(current_observation.precip_today_in).toFixed(0),  name: 'Precipitation'},
          {prop: parseInt(current_observation.visibility_mi).toFixed(0),    name: 'Visibility'},
          {prop: current_observation.dewpoint_f,  name: 'Dewpoint'}
        ],
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

      hourly:             hourly_forecast.slice(0, 7).map(hourObj => {
                            let hourInteger;

                            if(hourObj.FCTTIME.civil < 8) {
                              hourInteger = hourObj.FCTTIME.civil.slice(0, 1);
                            } else {
                              hourInteger = hourObj.FCTTIME.civil.slice(0, 2);
                            }

                            return Object.assign({}, {hour: hourInteger}, {ampm: hourObj.FCTTIME.ampm}, {temp: hourObj.temp.english}, {condition: hourObj.condition})
                          })
    }
}
