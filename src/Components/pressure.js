import createStatCard from "./statCardFactory.js"
import { metricCardsData } from "../assets/homePageSampleData.js"

const pressure = () => createStatCard({
	className: "pressure",
	label: metricCardsData.pressure.label,
	value: metricCardsData.pressure.value,
	icon: metricCardsData.pressure.icon
})

export default pressure
