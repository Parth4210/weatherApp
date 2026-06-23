import sampleData from "../assets/sampleData.json"

// Function to get data of a specific city and log it
const getWeatherData = async (city, WEATHER_API_KEY) => {
    try {
        // Commenting this out, currently only working on sample data to save usage of API credits
        // const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${WEATHER_API_KEY}`);
        const response = await sampleData
        // Will be commented out when app is ready
        // const data = await response.json(); 
        const data = await response; 
        
        console.log(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

export default getWeatherData