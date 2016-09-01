import axios from 'axios'
import keys from '../config/keys'

const _KEY = keys._KEY;
const _ENDPOINT = keys._ENDPOINT;

const _PARAM = `?id=524901&APPID=${_KEY}`;


//http://api.openweathermap.org/data/2.5/weather?q=new%20york?id=524901&APPID=c43f92a95038d8c43ef268776576dca5
export function getCurrentWeather(cityName){
  return axios.get(`${_ENDPOINT}weather?q=${cityName}&units=imperial${_PARAM}`)
    .then((currentWeatherData) => currentWeatherData.data)
    .catch((e)=> 'Error in getCurrentWeather: ' + e)
}
//'http://api.openweathermap.org/data/2.5/forecast/daily?q=city&units=imperial&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5
//http://api.openweathermap.org/data/2.5/forecast/daily?q=new%20york&type=accurate&id=524901&APPID=c43f92a95038d8c43ef268776576dca5&cnt=5
export function get5DayForecast(cityName){
  return axios.get(`${_ENDPOINT}forecast/daily?q=${cityName}&units=imperial&type=accurate${_PARAM}&cnt=5`)
    .then((forecastData) => forecastData.data)
    .catch((e)=> 'Error in get5DayForecast: ' + e)
}

//returns array of formated STRING dates
export function getDay(day){
  // var dates = dayArray.map((code)=> {
      var date = new Date(day * 1000) //*1000 to get milisec
      var format = date.toString().split(' ').slice(0,2) //toString because day is an object
      return `${format[0]}, ${format[1]} ${date.getDate()}` 
  // }) 
}

