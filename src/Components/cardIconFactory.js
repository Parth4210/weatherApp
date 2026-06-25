const createSvgElement = (viewBox, pathContent) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", viewBox)
    svg.setAttribute("aria-hidden", "true")
    svg.setAttribute("focusable", "false")

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g")
    group.innerHTML = pathContent
    svg.append(group)

    return svg
}

export const createMetricIcon = (iconName) => {
    const icon = document.createElement("span")
    icon.classList.add("metricIcon")

    if (iconName === "humidity") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <path d="M12 3.5c0 0 5.5 6.3 5.5 10.1A5.5 5.5 0 1 1 6.5 13.6C6.5 9.8 12 3.5 12 3.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <path d="M8.8 14.1c.5 1.4 1.7 2.4 3.2 2.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            `)
        )
    }

    if (iconName === "wind") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <path d="M4 8.5h10.2c1.5 0 2.8-1.1 2.8-2.6S15.7 3.5 14.2 3.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M4 12h13.2c1.8 0 3.3 1.2 3.3 2.8S19 17.6 17.2 17.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M4 15.8h7.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            `)
        )
    }

    if (iconName === "visibility") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <path d="M2.5 12s3.8-6.5 9.5-6.5S21.5 12 21.5 12 17.7 18.5 12 18.5 2.5 12 2.5 12Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/>
            `)
        )
    }

    if (iconName === "pressure") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="1.7"/>
                <path d="M12 12l4.4-3.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
                <path d="M12 7.5v1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            `)
        )
    }

    return icon
}

export const createForecastIcon = (iconName) => {
    const icon = document.createElement("span")
    icon.classList.add("forecastIcon")

    if (iconName === "sunny") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <circle cx="12" cy="12" r="4.2" fill="currentColor"/>
                <path d="M12 2.8v2.2M12 19v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.8 12h2.2M19 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            `)
        )
    }

    if (iconName === "rain") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <path d="M7.5 15.4h8.7a3.4 3.4 0 0 0 0-6.8h-.3A5 5 0 0 0 6.4 8.6a3.1 3.1 0 0 0 1.1 6.8Z" fill="currentColor"/>
                <path d="M8.5 17.8l-1.1 2.4M12 17.8l-1.1 2.4M15.5 17.8l-1.1 2.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            `)
        )
    }

    if (iconName === "partly-cloudy-day") {
        icon.append(
            createSvgElement("0 0 24 24", `
                <circle cx="8.2" cy="7.4" r="3.2" fill="currentColor"/>
                <path d="M7.2 15.5h8.8a3.2 3.2 0 0 0 0-6.4h-.2a4.6 4.6 0 0 0-8.8 1.7" fill="currentColor"/>
            `)
        )
    }

    return icon
}