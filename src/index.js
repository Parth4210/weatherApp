import './style.css'
import getWeatherData from './api/getWeatherData.js'
import renderHomePage from './dom/renderHomePage.js'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

// Getting the root element 
const root = document.querySelector(".root")

// To check if index.js is connected
console.log("index.js is connected")

renderHomePage()

// Enter the name of city in this function to get the weather Data of that city
getWeatherData("delhi", WEATHER_API_KEY)


export {root}