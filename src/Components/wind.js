import createStatCard from "./statCardFactory.js"
import { metricCardsData } from "../assets/homePageSampleData.js"

const wind = () => createStatCard({
	className: "wind",
	label: metricCardsData.wind.label,
	value: metricCardsData.wind.value,
	icon: metricCardsData.wind.icon
})

export default wind
