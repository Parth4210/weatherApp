import createStatCard from "./statCardFactory.js"
import { metricCardsData } from "../assets/homePageSampleData.js"

const humidity = () => createStatCard({
	className: "humidity",
	label: metricCardsData.humidity.label,
	value: metricCardsData.humidity.value,
	icon: metricCardsData.humidity.icon
})

export default humidity
