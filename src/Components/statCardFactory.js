import { createMetricIcon } from "./cardIconFactory.js"

const createStatCard = ({ className, label, value, icon }) => {
    const card = document.createElement("div")
    card.classList.add(className, "metricCard")

    const header = document.createElement("div")
    header.classList.add("metricHeader")

    const labelNode = document.createElement("span")
    labelNode.classList.add("metricLabel")
    labelNode.textContent = label

    header.append(createMetricIcon(icon), labelNode)

    const valueNode = document.createElement("p")
    valueNode.classList.add("metricValue")
    valueNode.textContent = value

    card.append(header, valueNode)

    return card
}

export default createStatCard