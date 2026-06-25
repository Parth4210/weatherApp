import locationIcon from "../assets/location.png"
import clearSkyWeatherIcon from "../assets/clear-sky.png"
import { weatherSnapshot } from "../assets/homePageSampleData.js"

const weatherCard = () =>{
    const card = document.createElement("div")
    card.classList.add("weatherCard")

    const city = document.createElement("span")
    city.innerHTML = `
    <img src=${locationIcon} alt="location icon" class="locationIcon">
    ${weatherSnapshot.location}
    `
    city.classList.add("cityWeatherCard")

    const weatherIcon = document.createElement('img')
    weatherIcon.src = clearSkyWeatherIcon
    weatherIcon.alt = weatherSnapshot.condition
    weatherIcon.classList.add("weatherIcon")

    const temperature = document.createElement('h1')
    temperature.textContent = `${weatherSnapshot.temperature}${weatherSnapshot.temperatureUnit}`
    temperature.classList.add("weatherCardTemperature")

    const weatherSummary = document.createElement('div')
    weatherSummary.classList.add('weatherSummary')
    weatherSummary.append(weatherIcon, temperature)

    const conditionTitle = document.createElement('h5')
    conditionTitle.textContent = weatherSnapshot.condition
    conditionTitle.classList.add('conditionTitle')

    const conditionDescription = document.createElement('p')
    conditionDescription.textContent = weatherSnapshot.summary
    conditionDescription.classList.add('conditionDescription')

    const weatherConditions = document.createElement('div')
    weatherConditions.classList.add('weatherConditions')
    weatherConditions.append(conditionTitle, conditionDescription)

    card.append(city, weatherSummary, weatherConditions)

    return card
}

// Todo after UI completion
const updateWeatherIcon = () =>{

}

// Todo after UI completion
const updateTemperatureScale = ()=>{

}

export default weatherCard