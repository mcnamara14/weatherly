import cleanData from './cleanData';

const data = {
  "response": {
      "version": "0.1",
      "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
      "features": {
          "forecast": 1,
          "hourly": 1,
          "forecast10day": 1,
          "conditions": 1
      }
  },
  "current_observation": {
      "image": {
          "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
          "title": "Weather Underground",
          "link": "http://www.wunderground.com"
      },
      "display_location": {
          "full": "San Diego, CA",
          "city": "San Diego",
          "state": "CA",
          "state_name": "California",
          "country": "US",
          "country_iso3166": "US",
          "zip": "92101",
          "magic": "1",
          "wmo": "99999",
          "latitude": "32.72000122",
          "longitude": "-117.16000366",
          "elevation": "28.0"
      },
      "observation_location": {
          "full": "San Diego, California",
          "city": "San Diego",
          "state": "California",
          "country": "US",
          "country_iso3166": "US",
          "latitude": "32.72",
          "longitude": "-117.16",
          "elevation": "75 ft"
      },
      "estimated": {},
      "station_id": "KCASANDI264",
      "observation_time": "Last Updated on April 16, 10:37 AM PDT",
      "observation_time_rfc822": "Mon, 16 Apr 2018 10:37:36 -0700",
      "observation_epoch": "1523900256",
      "local_time_rfc822": "Mon, 16 Apr 2018 10:38:29 -0700",
      "local_epoch": "1523900309",
      "local_tz_short": "PDT",
      "local_tz_long": "America/Los_Angeles",
      "local_tz_offset": "-0700",
      "weather": "Mostly Cloudy",
      "temperature_string": "60.8 F (16.0 C)",
      "temp_f": 60.8,
      "temp_c": 16,
      "relative_humidity": "78%",
      "wind_string": "From the North at 3.1 MPH Gusting to 6.8 MPH",
      "wind_dir": "North",
      "wind_degrees": 349,
      "wind_mph": 3.1,
      "wind_gust_mph": "6.8",
      "wind_kph": 5,
      "wind_gust_kph": "10.9",
      "pressure_mb": "1018",
      "pressure_in": "30.05",
      "pressure_trend": "0",
      "dewpoint_string": "54 F (12 C)",
      "dewpoint_f": 54,
      "dewpoint_c": 12,
      "heat_index_string": "NA",
      "heat_index_f": "NA",
      "heat_index_c": "NA",
      "windchill_string": "NA",
      "windchill_f": "NA",
      "windchill_c": "NA",
      "feelslike_string": "60.8 F (16.0 C)",
      "feelslike_f": "60.8",
      "feelslike_c": "16.0",
      "visibility_mi": "10.0",
      "visibility_km": "16.1",
      "solarradiation": "--",
      "UV": "4",
      "precip_1hr_string": "-999.00 in ( 0 mm)",
      "precip_1hr_in": "-999.00",
      "precip_1hr_metric": " 0",
      "precip_today_string": "0.00 in (0 mm)",
      "precip_today_in": "0.00",
      "precip_today_metric": "0",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "forecast_url": "http://www.wunderground.com/US/CA/San_Diego.html",
      "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANDI264",
      "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=32.715736,-117.161087",
      "nowcast": ""
  },
  "forecast": {
      "txt_forecast": {
          "date": "9:09 AM PDT",
          "forecastday": [
              {
                  "period": 0,
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "title": "Monday",
                  "fcttext": "Decreasing cloudiness and becoming windy. High near 65F. WNW winds at 10 to 15 mph, increasing to 20 to 30 mph. Winds could occasionally gust over 40 mph.",
                  "fcttext_metric": "Decreasing cloudiness and becoming windy. High 18C. WNW winds at 15 to 25 km/h, increasing to 30 to 50 km/h. Winds could occasionally gust over 65 km/h.",
                  "pop": "0"
              },
              {
                  "period": 1,
                  "icon": "nt_partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
                  "title": "Monday Night",
                  "fcttext": "Mostly clear skies. Gusty winds during the evening. Low near 55F. Winds NW at 20 to 30 mph.",
                  "fcttext_metric": "Mostly clear. Gusty winds diminishing after midnight. Low 13C. Winds NW at 30 to 50 km/h.",
                  "pop": "0"
              },
              {
                  "period": 2,
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "title": "Tuesday",
                  "fcttext": "A mainly sunny sky. High near 65F. Winds NW at 10 to 20 mph.",
                  "fcttext_metric": "Sunny. High 18C. Winds NW at 15 to 30 km/h.",
                  "pop": "0"
              },
              {
                  "period": 3,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Tuesday Night",
                  "fcttext": "Clear skies. Low 53F. Winds NNE at 5 to 10 mph.",
                  "fcttext_metric": "A mostly clear sky. Low 12C. Winds NNE at 10 to 15 km/h.",
                  "pop": "0"
              },
              {
                  "period": 4,
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "title": "Wednesday",
                  "fcttext": "Sunny skies. High 68F. Winds WSW at 10 to 15 mph.",
                  "fcttext_metric": "Sunny skies. High around 20C. Winds WSW at 15 to 25 km/h.",
                  "pop": "0"
              },
              {
                  "period": 5,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Wednesday Night",
                  "fcttext": "Partly cloudy. Low 56F. Winds W at 10 to 15 mph.",
                  "fcttext_metric": "Partly cloudy. Low 14C. Winds W at 10 to 15 km/h.",
                  "pop": "10"
              },
              {
                  "period": 6,
                  "icon": "chancerain",
                  "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
                  "title": "Thursday",
                  "fcttext": "Rain showers early with some sunshine later in the day. High 62F. Winds W at 15 to 25 mph. Chance of rain 40%. Winds could occasionally gust over 40 mph.",
                  "fcttext_metric": "Rain showers early with some sunshine later in the day. High 17C. Winds W at 25 to 40 km/h. Chance of rain 40%. Winds could occasionally gust over 65 km/h.",
                  "pop": "40"
              },
              {
                  "period": 7,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Thursday Night",
                  "fcttext": "Clear. Low 54F. Winds S at 5 to 10 mph.",
                  "fcttext_metric": "Clear skies. Low 12C. Winds S at 10 to 15 km/h.",
                  "pop": "0"
              },
              {
                  "period": 8,
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "title": "Friday",
                  "fcttext": "Sunny. High 71F. Winds NW at 10 to 15 mph.",
                  "fcttext_metric": "A mainly sunny sky. High 21C. Winds NW at 15 to 25 km/h.",
                  "pop": "0"
              },
              {
                  "period": 9,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Friday Night",
                  "fcttext": "Clear skies. Low 56F. Winds NNE at 5 to 10 mph.",
                  "fcttext_metric": "Clear skies. Low 13C. Winds NNE at 10 to 15 km/h.",
                  "pop": "10"
              },
              {
                  "period": 10,
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "title": "Saturday",
                  "fcttext": "Sunny. High 73F. Winds WNW at 10 to 15 mph.",
                  "fcttext_metric": "Sunny. High 23C. Winds WNW at 15 to 25 km/h.",
                  "pop": "0"
              },
              {
                  "period": 11,
                  "icon": "nt_partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
                  "title": "Saturday Night",
                  "fcttext": "Partly cloudy skies. Low 59F. Winds light and variable.",
                  "fcttext_metric": "A few clouds from time to time. Low near 15C. Winds light and variable.",
                  "pop": "0"
              },
              {
                  "period": 12,
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "title": "Sunday",
                  "fcttext": "A few passing clouds, otherwise generally sunny. High 72F. Winds WNW at 10 to 15 mph.",
                  "fcttext_metric": "Sun and a few passing clouds. High 22C. Winds WNW at 15 to 25 km/h.",
                  "pop": "0"
              },
              {
                  "period": 13,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Sunday Night",
                  "fcttext": "Mostly clear skies. Low 58F. Winds WSW at 5 to 10 mph.",
                  "fcttext_metric": "Mainly clear skies. Low around 15C. Winds light and variable.",
                  "pop": "10"
              },
              {
                  "period": 14,
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "title": "Monday",
                  "fcttext": "Partly cloudy skies. High near 70F. Winds W at 10 to 15 mph.",
                  "fcttext_metric": "Partly cloudy skies. High 21C. Winds W at 15 to 25 km/h.",
                  "pop": "0"
              },
              {
                  "period": 15,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Monday Night",
                  "fcttext": "A few clouds overnight. Low 57F. Winds WNW at 5 to 10 mph.",
                  "fcttext_metric": "Clear to partly cloudy. Low 14C. Winds WNW at 10 to 15 km/h.",
                  "pop": "10"
              },
              {
                  "period": 16,
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "title": "Tuesday",
                  "fcttext": "Partly cloudy skies. High 68F. Winds W at 10 to 15 mph.",
                  "fcttext_metric": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High near 20C. Winds W at 10 to 15 km/h.",
                  "pop": "10"
              },
              {
                  "period": 17,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Tuesday Night",
                  "fcttext": "Mainly clear skies. Low 57F. Winds W at 5 to 10 mph.",
                  "fcttext_metric": "Mostly clear skies. Low 14C. Winds W at 10 to 15 km/h.",
                  "pop": "10"
              },
              {
                  "period": 18,
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "title": "Wednesday",
                  "fcttext": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 67F. Winds WSW at 10 to 15 mph.",
                  "fcttext_metric": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 19C. Winds WSW at 15 to 25 km/h.",
                  "pop": "10"
              },
              {
                  "period": 19,
                  "icon": "nt_clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
                  "title": "Wednesday Night",
                  "fcttext": "A mostly clear sky. Low 57F. Winds W at 5 to 10 mph.",
                  "fcttext_metric": "Mostly clear. Low 14C. Winds W at 10 to 15 km/h.",
                  "pop": "10"
              }
          ]
      },
      "simpleforecast": {
          "forecastday": [
              {
                  "date": {
                      "epoch": "1523930400",
                      "pretty": "7:00 PM PDT on April 16, 2018",
                      "day": 16,
                      "month": 4,
                      "year": 2018,
                      "yday": 105,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Mon",
                      "weekday": "Monday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 1,
                  "high": {
                      "fahrenheit": "65",
                      "celsius": "18"
                  },
                  "low": {
                      "fahrenheit": "55",
                      "celsius": "13"
                  },
                  "conditions": "Partly Cloudy",
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 30,
                      "kph": 48,
                      "dir": "WNW",
                      "degrees": 298
                  },
                  "avewind": {
                      "mph": 22,
                      "kph": 35,
                      "dir": "WNW",
                      "degrees": 298
                  },
                  "avehumidity": 57,
                  "maxhumidity": 66,
                  "minhumidity": 49
              },
              {
                  "date": {
                      "epoch": "1524016800",
                      "pretty": "7:00 PM PDT on April 17, 2018",
                      "day": 17,
                      "month": 4,
                      "year": 2018,
                      "yday": 106,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Tue",
                      "weekday": "Tuesday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 2,
                  "high": {
                      "fahrenheit": "65",
                      "celsius": "18"
                  },
                  "low": {
                      "fahrenheit": "53",
                      "celsius": "12"
                  },
                  "conditions": "Clear",
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 20,
                      "kph": 32,
                      "dir": "NW",
                      "degrees": 321
                  },
                  "avewind": {
                      "mph": 14,
                      "kph": 23,
                      "dir": "NW",
                      "degrees": 321
                  },
                  "avehumidity": 51,
                  "maxhumidity": 62,
                  "minhumidity": 41
              },
              {
                  "date": {
                      "epoch": "1524103200",
                      "pretty": "7:00 PM PDT on April 18, 2018",
                      "day": 18,
                      "month": 4,
                      "year": 2018,
                      "yday": 107,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Wed",
                      "weekday": "Wednesday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 3,
                  "high": {
                      "fahrenheit": "68",
                      "celsius": "20"
                  },
                  "low": {
                      "fahrenheit": "56",
                      "celsius": "13"
                  },
                  "conditions": "Clear",
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "WSW",
                      "degrees": 250
                  },
                  "avewind": {
                      "mph": 11,
                      "kph": 18,
                      "dir": "WSW",
                      "degrees": 250
                  },
                  "avehumidity": 57,
                  "maxhumidity": 71,
                  "minhumidity": 48
              },
              {
                  "date": {
                      "epoch": "1524189600",
                      "pretty": "7:00 PM PDT on April 19, 2018",
                      "day": 19,
                      "month": 4,
                      "year": 2018,
                      "yday": 108,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Thu",
                      "weekday": "Thursday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 4,
                  "high": {
                      "fahrenheit": "62",
                      "celsius": "17"
                  },
                  "low": {
                      "fahrenheit": "54",
                      "celsius": "12"
                  },
                  "conditions": "Chance of Rain",
                  "icon": "chancerain",
                  "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
                  "skyicon": "",
                  "pop": 40,
                  "qpf_allday": {
                      "in": 0.02,
                      "mm": 1
                  },
                  "qpf_day": {
                      "in": 0.02,
                      "mm": 1
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 25,
                      "kph": 40,
                      "dir": "W",
                      "degrees": 280
                  },
                  "avewind": {
                      "mph": 17,
                      "kph": 27,
                      "dir": "W",
                      "degrees": 280
                  },
                  "avehumidity": 60,
                  "maxhumidity": 72,
                  "minhumidity": 50
              },
              {
                  "date": {
                      "epoch": "1524276000",
                      "pretty": "7:00 PM PDT on April 20, 2018",
                      "day": 20,
                      "month": 4,
                      "year": 2018,
                      "yday": 109,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Fri",
                      "weekday": "Friday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 5,
                  "high": {
                      "fahrenheit": "71",
                      "celsius": "22"
                  },
                  "low": {
                      "fahrenheit": "56",
                      "celsius": "13"
                  },
                  "conditions": "Clear",
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "NW",
                      "degrees": 316
                  },
                  "avewind": {
                      "mph": 11,
                      "kph": 18,
                      "dir": "NW",
                      "degrees": 316
                  },
                  "avehumidity": 58,
                  "maxhumidity": 72,
                  "minhumidity": 43
              },
              {
                  "date": {
                      "epoch": "1524362400",
                      "pretty": "7:00 PM PDT on April 21, 2018",
                      "day": 21,
                      "month": 4,
                      "year": 2018,
                      "yday": 110,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Sat",
                      "weekday": "Saturday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 6,
                  "high": {
                      "fahrenheit": "73",
                      "celsius": "23"
                  },
                  "low": {
                      "fahrenheit": "59",
                      "celsius": "15"
                  },
                  "conditions": "Clear",
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "WNW",
                      "degrees": 299
                  },
                  "avewind": {
                      "mph": 10,
                      "kph": 16,
                      "dir": "WNW",
                      "degrees": 299
                  },
                  "avehumidity": 59,
                  "maxhumidity": 74,
                  "minhumidity": 45
              },
              {
                  "date": {
                      "epoch": "1524448800",
                      "pretty": "7:00 PM PDT on April 22, 2018",
                      "day": 22,
                      "month": 4,
                      "year": 2018,
                      "yday": 111,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Sun",
                      "weekday": "Sunday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 7,
                  "high": {
                      "fahrenheit": "72",
                      "celsius": "22"
                  },
                  "low": {
                      "fahrenheit": "58",
                      "celsius": "14"
                  },
                  "conditions": "Clear",
                  "icon": "clear",
                  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "WNW",
                      "degrees": 291
                  },
                  "avewind": {
                      "mph": 10,
                      "kph": 16,
                      "dir": "WNW",
                      "degrees": 291
                  },
                  "avehumidity": 61,
                  "maxhumidity": 72,
                  "minhumidity": 47
              },
              {
                  "date": {
                      "epoch": "1524535200",
                      "pretty": "7:00 PM PDT on April 23, 2018",
                      "day": 23,
                      "month": 4,
                      "year": 2018,
                      "yday": 112,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Mon",
                      "weekday": "Monday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 8,
                  "high": {
                      "fahrenheit": "70",
                      "celsius": "21"
                  },
                  "low": {
                      "fahrenheit": "57",
                      "celsius": "14"
                  },
                  "conditions": "Partly Cloudy",
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "skyicon": "",
                  "pop": 0,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "W",
                      "degrees": 265
                  },
                  "avewind": {
                      "mph": 10,
                      "kph": 16,
                      "dir": "W",
                      "degrees": 265
                  },
                  "avehumidity": 65,
                  "maxhumidity": 75,
                  "minhumidity": 53
              },
              {
                  "date": {
                      "epoch": "1524621600",
                      "pretty": "7:00 PM PDT on April 24, 2018",
                      "day": 24,
                      "month": 4,
                      "year": 2018,
                      "yday": 113,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Tue",
                      "weekday": "Tuesday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 9,
                  "high": {
                      "fahrenheit": "68",
                      "celsius": "20"
                  },
                  "low": {
                      "fahrenheit": "57",
                      "celsius": "14"
                  },
                  "conditions": "Partly Cloudy",
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "skyicon": "",
                  "pop": 10,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "W",
                      "degrees": 277
                  },
                  "avewind": {
                      "mph": 10,
                      "kph": 16,
                      "dir": "W",
                      "degrees": 277
                  },
                  "avehumidity": 67,
                  "maxhumidity": 76,
                  "minhumidity": 56
              },
              {
                  "date": {
                      "epoch": "1524708000",
                      "pretty": "7:00 PM PDT on April 25, 2018",
                      "day": 25,
                      "month": 4,
                      "year": 2018,
                      "yday": 114,
                      "hour": 19,
                      "min": "00",
                      "sec": 0,
                      "isdst": "1",
                      "monthname": "April",
                      "monthname_short": "Apr",
                      "weekday_short": "Wed",
                      "weekday": "Wednesday",
                      "ampm": "PM",
                      "tz_short": "PDT",
                      "tz_long": "America/Los_Angeles"
                  },
                  "period": 10,
                  "high": {
                      "fahrenheit": "67",
                      "celsius": "19"
                  },
                  "low": {
                      "fahrenheit": "57",
                      "celsius": "14"
                  },
                  "conditions": "Partly Cloudy",
                  "icon": "partlycloudy",
                  "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  "skyicon": "",
                  "pop": 10,
                  "qpf_allday": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_day": {
                      "in": 0,
                      "mm": 0
                  },
                  "qpf_night": {
                      "in": 0,
                      "mm": 0
                  },
                  "snow_allday": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_day": {
                      "in": 0,
                      "cm": 0
                  },
                  "snow_night": {
                      "in": 0,
                      "cm": 0
                  },
                  "maxwind": {
                      "mph": 15,
                      "kph": 24,
                      "dir": "WSW",
                      "degrees": 258
                  },
                  "avewind": {
                      "mph": 11,
                      "kph": 18,
                      "dir": "WSW",
                      "degrees": 258
                  },
                  "avehumidity": 67,
                  "maxhumidity": 78,
                  "minhumidity": 58
              }
          ]
      }
  },
  "hourly_forecast": [
      {
          "FCTTIME": {
              "hour": "11",
              "hour_padded": "11",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523901600",
              "pretty": "11:00 AM PDT on April 16, 2018",
              "civil": "11:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "51",
              "metric": "11"
          },
          "condition": "Mostly Cloudy",
          "icon": "mostlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
          "fctcode": "3",
          "sky": "76",
          "wspd": {
              "english": "12",
              "metric": "19"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "293"
          },
          "wx": "Mostly Cloudy",
          "uvi": "4",
          "humidity": "62",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.03",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "12",
              "hour_padded": "12",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523905200",
              "pretty": "12:00 PM PDT on April 16, 2018",
              "civil": "12:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "50",
              "metric": "10"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "59",
          "wspd": {
              "english": "14",
              "metric": "23"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "295"
          },
          "wx": "Partly Cloudy",
          "uvi": "7",
          "humidity": "60",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "2",
          "mslp": {
              "english": "30.04",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "13",
              "hour_padded": "13",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523908800",
              "pretty": "1:00 PM PDT on April 16, 2018",
              "civil": "1:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "65",
              "metric": "18"
          },
          "dewpoint": {
              "english": "49",
              "metric": "9"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "44",
          "wspd": {
              "english": "16",
              "metric": "26"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "297"
          },
          "wx": "Partly Cloudy",
          "uvi": "9",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "65",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.04",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "14",
              "hour_padded": "14",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523912400",
              "pretty": "2:00 PM PDT on April 16, 2018",
              "civil": "2:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "63",
              "metric": "17"
          },
          "dewpoint": {
              "english": "46",
              "metric": "8"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "27",
          "wspd": {
              "english": "19",
              "metric": "31"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "298"
          },
          "wx": "Mostly Sunny",
          "uvi": "8",
          "humidity": "54",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "63",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.03",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "15",
              "hour_padded": "15",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523916000",
              "pretty": "3:00 PM PDT on April 16, 2018",
              "civil": "3:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "62",
              "metric": "17"
          },
          "dewpoint": {
              "english": "46",
              "metric": "8"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "13",
          "wspd": {
              "english": "19",
              "metric": "31"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "297"
          },
          "wx": "Sunny",
          "uvi": "6",
          "humidity": "56",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "62",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.03",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "16",
              "hour_padded": "16",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523919600",
              "pretty": "4:00 PM PDT on April 16, 2018",
              "civil": "4:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "63",
              "metric": "17"
          },
          "dewpoint": {
              "english": "44",
              "metric": "7"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "8",
          "wspd": {
              "english": "20",
              "metric": "32"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "296"
          },
          "wx": "Sunny/Wind",
          "uvi": "4",
          "humidity": "49",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "63",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.03",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "17",
              "hour_padded": "17",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523923200",
              "pretty": "5:00 PM PDT on April 16, 2018",
              "civil": "5:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "62",
              "metric": "17"
          },
          "dewpoint": {
              "english": "44",
              "metric": "7"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "8",
          "wspd": {
              "english": "20",
              "metric": "32"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "297"
          },
          "wx": "Sunny/Wind",
          "uvi": "2",
          "humidity": "51",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "62",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.03",
              "metric": "1017"
          }
      },
      {
          "FCTTIME": {
              "hour": "18",
              "hour_padded": "18",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523926800",
              "pretty": "6:00 PM PDT on April 16, 2018",
              "civil": "6:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "61",
              "metric": "16"
          },
          "dewpoint": {
              "english": "44",
              "metric": "7"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "6",
          "wspd": {
              "english": "22",
              "metric": "35"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "300"
          },
          "wx": "Sunny/Wind",
          "uvi": "0",
          "humidity": "54",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "61",
              "metric": "16"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.05",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "19",
              "hour_padded": "19",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523930400",
              "pretty": "7:00 PM PDT on April 16, 2018",
              "civil": "7:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "60",
              "metric": "16"
          },
          "dewpoint": {
              "english": "45",
              "metric": "7"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "fctcode": "2",
          "sky": "14",
          "wspd": {
              "english": "21",
              "metric": "34"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "299"
          },
          "wx": "Sunny/Wind",
          "uvi": "0",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "60",
              "metric": "16"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.06",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "20",
              "hour_padded": "20",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523934000",
              "pretty": "8:00 PM PDT on April 16, 2018",
              "civil": "8:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "45",
              "metric": "7"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "29",
          "wspd": {
              "english": "18",
              "metric": "29"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "300"
          },
          "wx": "Mostly Clear",
          "uvi": "0",
          "humidity": "58",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.08",
              "metric": "1019"
          }
      },
      {
          "FCTTIME": {
              "hour": "21",
              "hour_padded": "21",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523937600",
              "pretty": "9:00 PM PDT on April 16, 2018",
              "civil": "9:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "45",
              "metric": "7"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "22",
          "wspd": {
              "english": "17",
              "metric": "27"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "299"
          },
          "wx": "Mostly Clear",
          "uvi": "0",
          "humidity": "59",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.1",
              "metric": "1019"
          }
      },
      {
          "FCTTIME": {
              "hour": "22",
              "hour_padded": "22",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523941200",
              "pretty": "10:00 PM PDT on April 16, 2018",
              "civil": "10:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "45",
              "metric": "7"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "14",
          "wspd": {
              "english": "16",
              "metric": "26"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "297"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "60",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.12",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "23",
              "hour_padded": "23",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "16",
              "mday_padded": "16",
              "yday": "105",
              "isdst": "1",
              "epoch": "1523944800",
              "pretty": "11:00 PM PDT on April 16, 2018",
              "civil": "11:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Monday",
              "weekday_name_night": "Monday Night",
              "weekday_name_abbrev": "Mon",
              "weekday_name_unlang": "Monday",
              "weekday_name_night_unlang": "Monday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "14",
          "wspd": {
              "english": "16",
              "metric": "26"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "299"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "56",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.13",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "0",
              "hour_padded": "00",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523948400",
              "pretty": "12:00 AM PDT on April 17, 2018",
              "civil": "12:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "58",
              "metric": "14"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "12",
          "wspd": {
              "english": "16",
              "metric": "26"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "303"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "58",
              "metric": "14"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.14",
              "metric": "1021"
          }
      },
      {
          "FCTTIME": {
              "hour": "1",
              "hour_padded": "01",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523952000",
              "pretty": "1:00 AM PDT on April 17, 2018",
              "civil": "1:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "58",
              "metric": "14"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "22",
          "wspd": {
              "english": "15",
              "metric": "24"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "299"
          },
          "wx": "Mostly Clear",
          "uvi": "0",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "58",
              "metric": "14"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.13",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "2",
              "hour_padded": "02",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523955600",
              "pretty": "2:00 AM PDT on April 17, 2018",
              "civil": "2:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "58",
              "metric": "14"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "23",
          "wspd": {
              "english": "14",
              "metric": "23"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "303"
          },
          "wx": "Mostly Clear",
          "uvi": "0",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "58",
              "metric": "14"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.13",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "3",
              "hour_padded": "03",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523959200",
              "pretty": "3:00 AM PDT on April 17, 2018",
              "civil": "3:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "57",
              "metric": "14"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "19",
          "wspd": {
              "english": "14",
              "metric": "23"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "311"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "58",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "57",
              "metric": "14"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "3",
          "mslp": {
              "english": "30.12",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "4",
              "hour_padded": "04",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523962800",
              "pretty": "4:00 AM PDT on April 17, 2018",
              "civil": "4:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "56",
              "metric": "13"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "28",
          "wspd": {
              "english": "13",
              "metric": "21"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "312"
          },
          "wx": "Mostly Clear",
          "uvi": "0",
          "humidity": "60",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "56",
              "metric": "13"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.13",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "5",
              "hour_padded": "05",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523966400",
              "pretty": "5:00 AM PDT on April 17, 2018",
              "civil": "5:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "56",
              "metric": "13"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "fctcode": "2",
          "sky": "34",
          "wspd": {
              "english": "7",
              "metric": "11"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "321"
          },
          "wx": "Partly Cloudy",
          "uvi": "0",
          "humidity": "62",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "56",
              "metric": "13"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.13",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "6",
              "hour_padded": "06",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523970000",
              "pretty": "6:00 AM PDT on April 17, 2018",
              "civil": "6:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "56",
              "metric": "13"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "16",
          "wspd": {
              "english": "5",
              "metric": "8"
          },
          "wdir": {
              "dir": "NNW",
              "degrees": "338"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "61",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "56",
              "metric": "13"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.14",
              "metric": "1021"
          }
      },
      {
          "FCTTIME": {
              "hour": "7",
              "hour_padded": "07",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523973600",
              "pretty": "7:00 AM PDT on April 17, 2018",
              "civil": "7:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "56",
              "metric": "13"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "11",
          "wspd": {
              "english": "4",
              "metric": "6"
          },
          "wdir": {
              "dir": "NNE",
              "degrees": "23"
          },
          "wx": "Sunny",
          "uvi": "0",
          "humidity": "60",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "56",
              "metric": "13"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "4",
          "mslp": {
              "english": "30.16",
              "metric": "1021"
          }
      },
      {
          "FCTTIME": {
              "hour": "8",
              "hour_padded": "08",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523977200",
              "pretty": "8:00 AM PDT on April 17, 2018",
              "civil": "8:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "57",
              "metric": "14"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "7",
          "wspd": {
              "english": "4",
              "metric": "6"
          },
          "wdir": {
              "dir": "NNE",
              "degrees": "32"
          },
          "wx": "Sunny",
          "uvi": "1",
          "humidity": "58",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "57",
              "metric": "14"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.18",
              "metric": "1022"
          }
      },
      {
          "FCTTIME": {
              "hour": "9",
              "hour_padded": "09",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523980800",
              "pretty": "9:00 AM PDT on April 17, 2018",
              "civil": "9:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "41",
              "metric": "5"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "4",
          "wspd": {
              "english": "2",
              "metric": "3"
          },
          "wdir": {
              "dir": "NNW",
              "degrees": "343"
          },
          "wx": "Sunny",
          "uvi": "2",
          "humidity": "53",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.18",
              "metric": "1022"
          }
      },
      {
          "FCTTIME": {
              "hour": "10",
              "hour_padded": "10",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523984400",
              "pretty": "10:00 AM PDT on April 17, 2018",
              "civil": "10:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "60",
              "metric": "16"
          },
          "dewpoint": {
              "english": "39",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "1",
          "wspd": {
              "english": "7",
              "metric": "11"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "303"
          },
          "wx": "Sunny",
          "uvi": "5",
          "humidity": "46",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "60",
              "metric": "16"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.18",
              "metric": "1022"
          }
      },
      {
          "FCTTIME": {
              "hour": "11",
              "hour_padded": "11",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523988000",
              "pretty": "11:00 AM PDT on April 17, 2018",
              "civil": "11:00 AM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "AM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "63",
              "metric": "17"
          },
          "dewpoint": {
              "english": "39",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "9",
              "metric": "14"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "301"
          },
          "wx": "Sunny",
          "uvi": "7",
          "humidity": "41",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "63",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.17",
              "metric": "1022"
          }
      },
      {
          "FCTTIME": {
              "hour": "12",
              "hour_padded": "12",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523991600",
              "pretty": "12:00 PM PDT on April 17, 2018",
              "civil": "12:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "39",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "11",
              "metric": "18"
          },
          "wdir": {
              "dir": "WNW",
              "degrees": "301"
          },
          "wx": "Sunny",
          "uvi": "9",
          "humidity": "41",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.16",
              "metric": "1021"
          }
      },
      {
          "FCTTIME": {
              "hour": "13",
              "hour_padded": "13",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523995200",
              "pretty": "1:00 PM PDT on April 17, 2018",
              "civil": "1:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "40",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "13",
              "metric": "21"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "306"
          },
          "wx": "Sunny",
          "uvi": "9",
          "humidity": "42",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.14",
              "metric": "1021"
          }
      },
      {
          "FCTTIME": {
              "hour": "14",
              "hour_padded": "14",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1523998800",
              "pretty": "2:00 PM PDT on April 17, 2018",
              "civil": "2:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "40",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "15",
              "metric": "24"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "310"
          },
          "wx": "Sunny",
          "uvi": "8",
          "humidity": "42",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.12",
              "metric": "1020"
          }
      },
      {
          "FCTTIME": {
              "hour": "15",
              "hour_padded": "15",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524002400",
              "pretty": "3:00 PM PDT on April 17, 2018",
              "civil": "3:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "41",
              "metric": "5"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "15",
              "metric": "24"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "310"
          },
          "wx": "Sunny",
          "uvi": "6",
          "humidity": "43",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.1",
              "metric": "1019"
          }
      },
      {
          "FCTTIME": {
              "hour": "16",
              "hour_padded": "16",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524006000",
              "pretty": "4:00 PM PDT on April 17, 2018",
              "civil": "4:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "41",
              "metric": "5"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "14",
              "metric": "23"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "306"
          },
          "wx": "Sunny",
          "uvi": "4",
          "humidity": "42",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.08",
              "metric": "1019"
          }
      },
      {
          "FCTTIME": {
              "hour": "17",
              "hour_padded": "17",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524009600",
              "pretty": "5:00 PM PDT on April 17, 2018",
              "civil": "5:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "64",
              "metric": "18"
          },
          "dewpoint": {
              "english": "40",
              "metric": "4"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "14",
              "metric": "23"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "307"
          },
          "wx": "Sunny",
          "uvi": "2",
          "humidity": "42",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "64",
              "metric": "18"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.06",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "18",
              "hour_padded": "18",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524013200",
              "pretty": "6:00 PM PDT on April 17, 2018",
              "civil": "6:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "63",
              "metric": "17"
          },
          "dewpoint": {
              "english": "42",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "11",
              "metric": "18"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "313"
          },
          "wx": "Sunny",
          "uvi": "0",
          "humidity": "47",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "63",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.05",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "19",
              "hour_padded": "19",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524016800",
              "pretty": "7:00 PM PDT on April 17, 2018",
              "civil": "7:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "62",
              "metric": "17"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "9",
              "metric": "14"
          },
          "wdir": {
              "dir": "NW",
              "degrees": "318"
          },
          "wx": "Sunny",
          "uvi": "0",
          "humidity": "50",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "62",
              "metric": "17"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.05",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "20",
              "hour_padded": "20",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524020400",
              "pretty": "8:00 PM PDT on April 17, 2018",
              "civil": "8:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "61",
              "metric": "16"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "7",
              "metric": "11"
          },
          "wdir": {
              "dir": "NNW",
              "degrees": "329"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "52",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "61",
              "metric": "16"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "0",
          "mslp": {
              "english": "30.06",
              "metric": "1018"
          }
      },
      {
          "FCTTIME": {
              "hour": "21",
              "hour_padded": "21",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524024000",
              "pretty": "9:00 PM PDT on April 17, 2018",
              "civil": "9:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "60",
              "metric": "16"
          },
          "dewpoint": {
              "english": "43",
              "metric": "6"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "5",
              "metric": "8"
          },
          "wdir": {
              "dir": "NNW",
              "degrees": "340"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "54",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "60",
              "metric": "16"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.08",
              "metric": "1019"
          }
      },
      {
          "FCTTIME": {
              "hour": "22",
              "hour_padded": "22",
              "min": "00",
              "min_unpadded": "0",
              "sec": "0",
              "year": "2018",
              "mon": "4",
              "mon_padded": "04",
              "mon_abbrev": "Apr",
              "mday": "17",
              "mday_padded": "17",
              "yday": "106",
              "isdst": "1",
              "epoch": "1524027600",
              "pretty": "10:00 PM PDT on April 17, 2018",
              "civil": "10:00 PM",
              "month_name": "April",
              "month_name_abbrev": "Apr",
              "weekday_name": "Tuesday",
              "weekday_name_night": "Tuesday Night",
              "weekday_name_abbrev": "Tue",
              "weekday_name_unlang": "Tuesday",
              "weekday_name_night_unlang": "Tuesday Night",
              "ampm": "PM",
              "tz": "",
              "age": "",
              "UTCDATE": ""
          },
          "temp": {
              "english": "59",
              "metric": "15"
          },
          "dewpoint": {
              "english": "44",
              "metric": "7"
          },
          "condition": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "fctcode": "1",
          "sky": "0",
          "wspd": {
              "english": "4",
              "metric": "6"
          },
          "wdir": {
              "dir": "NNW",
              "degrees": "343"
          },
          "wx": "Clear",
          "uvi": "0",
          "humidity": "57",
          "windchill": {
              "english": "-9999",
              "metric": "-9999"
          },
          "heatindex": {
              "english": "-9999",
              "metric": "-9999"
          },
          "feelslike": {
              "english": "59",
              "metric": "15"
          },
          "qpf": {
              "english": "0.0",
              "metric": "0"
          },
          "snow": {
              "english": "0.0",
              "metric": "0"
          },
          "pop": "1",
          "mslp": {
              "english": "30.09",
              "metric": "1019"
          }
      }
  ]
};

const cleanedData = cleanData(data);

module.exports = cleanedData;