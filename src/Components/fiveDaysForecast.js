import { createForecastIcon } from "./cardIconFactory.js"
import { forecastData } from "../assets/homePageSampleData.js"

const fiveDaysForecast = () => {
	const card = document.createElement("div")
	card.classList.add("fiveDaysForecast")

	const title = document.createElement("p")
	title.classList.add("forecastTitle")
	title.textContent = "5-DAY FORECAST"

	const forecastGrid = document.createElement("div")
	forecastGrid.classList.add("forecastGrid")

	forecastData.forEach(({ day, icon, high, low }) => {
		const dayCard = document.createElement("div")
		dayCard.classList.add("forecastDay")

		const dayLabel = document.createElement("span")
		dayLabel.classList.add("forecastDayLabel")
		dayLabel.textContent = day

		const forecastIcon = createForecastIcon(icon)

		const highTemp = document.createElement("span")
		highTemp.classList.add("forecastHigh")
		highTemp.textContent = high

		const lowTemp = document.createElement("span")
		lowTemp.classList.add("forecastLow")
		lowTemp.textContent = low

		dayCard.append(dayLabel, forecastIcon, highTemp, lowTemp)
		forecastGrid.append(dayCard)
	})

	card.append(title, forecastGrid)

	return card
}

export default fiveDaysForecast
