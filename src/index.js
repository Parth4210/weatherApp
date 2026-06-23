import './style.css'
import getWeatherData from './api/getWeatherData.js'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// To check if index.js is connected
console.log("index.js is connected")

// Enter the name of city in this function to get the weather Data of that city
getWeatherData("delhi", WEATHER_API_KEY)