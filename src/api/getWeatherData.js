import sampleData from "../assets/sampleData.json"

// Function to get data of a specific city.
const getWeatherData = async (city, weatherApiKey) => {
    try {
        if (!weatherApiKey) {
            return sampleData
        }

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${weatherApiKey}`)

        if (!response.ok) {
            throw new Error(`Weather request failed with status ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error
    }
}

export default getWeatherData