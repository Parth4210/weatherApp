import extractData, { getCity, getCurrentCondition, getCurrentFeelsLike, getCurrentHumidity, getCurrentIcon, getCurrentPressure, getCurrentTemperature, getCurrentUvIndex, getCurrentVisibility, getCurrentWindSpeed, getFiveDayForecast } from '../api/extractData.js'

export const weatherSnapshot = {
    location: getCity(),
    condition: "Partly Cloudy",
    temperature: getCurrentTemperature(),
    temperatureUnit: "°F",
    summary: `Feels like ${getCurrentFeelsLike()} . UV Index ${getCurrentUvIndex()}`
}

export const metricCardsData = {
    humidity: {
        label: "Humidity",
        value: `${getCurrentHumidity()}%`,
        icon: "humidity"
    },
    wind: {
        label: "Wind",
        value: `${getCurrentWindSpeed()} km/h`,
        icon: "wind"
    },
    visibility: {
        label: "Visibility",
        value: `${getCurrentVisibility()} km`,
        icon: "visibility"
    },
    pressure: {
        label: "Pressure",
        value: `${getCurrentPressure()} hPa`,
        icon: "pressure"
    }
}

export const forecastData = getFiveDayForecast()