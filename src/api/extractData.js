import getWeatherData from "./getWeatherData.js";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" })

const extractData = () => {
    console.log("Connected to extractData.js")
}

const data = await getWeatherData("sonipat", WEATHER_API_KEY)

const formatTemperature = (temperature) => `${Math.round(temperature)}°`

const getCity = () => {
    const city = data.address.charAt(0).toUpperCase() + data.address.slice(1);
    return city
}

const getCurrentIcon = () => {
    const currentIcon = data.days[0].icon
    return currentIcon
}

const getCurrentTemperature = () => {
    const currentTemperature = data.days[0].temp
    return currentTemperature
}

const getCurrentCondition = () => {
    const currentCondition = data.days[0].conditions
    return currentCondition
}

const getCurrentFeelsLike = () => {
    const currentFeelsLike = data.days[0].feelslike
    return currentFeelsLike
}

const getCurrentUvIndex = () => {
    const CurrentUvIndex = data.days[0].uvindex
    return CurrentUvIndex
}

const getCurrentHumidity = () => {
    const humidity = data.days[0].humidity
    return humidity
}

const getCurrentWindSpeed = () => {
    const wind = data.days[0].windspeed
    return wind
}

const getCurrentVisibility = () => {
    const visibility = data.days[0].visibility
    return visibility
}

const getCurrentPressure = () => {
    const pressure = data.days[0].pressure
    return pressure
}

const getFiveDayForecast = () => {
    return data.days.slice(1, 6).map((day) => ({
        day: dayFormatter.format(new Date(day.datetime)),
        icon: day.icon,
        high: formatTemperature(day.tempmax),
        low: formatTemperature(day.tempmin)
    }))
}

export default extractData
export { getCity, getCurrentIcon, getCurrentTemperature, getCurrentCondition, getCurrentFeelsLike, getCurrentUvIndex, getCurrentHumidity, getCurrentWindSpeed, getCurrentVisibility, getCurrentPressure, getFiveDayForecast }