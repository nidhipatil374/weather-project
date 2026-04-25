import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        // city : "Pune",
        // feelsLike: 298.21,
        // humidity: 91,
        // temp: 297.36,
        // tempMax: 297.36,
        // tempMin: 297.36,
        // weather: "overcast clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}