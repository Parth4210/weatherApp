import citySearchBar from "../Components/citySearchBar.js";
import scaleSelection from "../Components/scaleSelection.js";
import weatherCard from "../Components/weatherCard.js";
import humidity from "../Components/humidity.js";
import wind from "../Components/wind.js";
import visibility from "../Components/visibility.js";
import pressure from "../Components/pressure.js";
import fiveDaysForecast from "../Components/fiveDaysForecast.js";


import { root } from "../index.js";

const renderHomePage = () =>{
    root.append(
        citySearchBar,
        scaleSelection,
        weatherCard(),
        humidity(),
        wind(),
        visibility(),
        pressure(),
        fiveDaysForecast()
    )
}

export default renderHomePage