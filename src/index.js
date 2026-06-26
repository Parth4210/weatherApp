import './style.css'
import getWeatherData from './api/getWeatherData.js'
import renderHomePage from './dom/renderHomePage.js'
import extractData, { getCity, getCurrentCondition, getCurrentFeelsLike, getCurrentHumidity, getCurrentIcon, getCurrentPressure, getCurrentTemperature, getCurrentUvIndex, getCurrentVisibility, getCurrentWindSpeed, getFiveDayForecast } from './api/extractData.js'




const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// Getting the root element 
const root = document.querySelector(".root")

// To check if index.js is connected
console.log("index.js is connected")

renderHomePage()

// Enter the name of city in this function to get the weather Data of that city
extractData()

console.log(getCity(), getCurrentIcon(), getCurrentTemperature(), getCurrentCondition(), getCurrentFeelsLike(), getCurrentUvIndex(), getFiveDayForecast(), getCurrentHumidity(), getCurrentWindSpeed(), getCurrentVisibility(), getCurrentPressure())


export { root }