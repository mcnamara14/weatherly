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

      hourly: [
        {hour: 2, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 3, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 4, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 5, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 6, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 7, ampm: 'PM', temp: 91, condition: 'Sunny'},
        {hour: 8, ampm: 'PM', temp: 91, condition: 'Sunny'}
      ]           
    }
}