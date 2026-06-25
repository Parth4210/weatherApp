import createStatCard from "./statCardFactory.js"
import { metricCardsData } from "../assets/homePageSampleData.js"

const visibility = () => createStatCard({
	className: "visibility",
	label: metricCardsData.visibility.label,
	value: metricCardsData.visibility.value,
	icon: metricCardsData.visibility.icon
})

export default visibility
