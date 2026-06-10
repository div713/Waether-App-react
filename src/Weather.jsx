import { useState } from "react"
import Searchbox from "./Searchbox";
import Infobox from './Infobox';

export default function Weather(){
    let [info,setInfo] = useState({
        city: "Delhi",
        feelsLike:43.08,
        humidity: 17,
        maxtemp: 43.36,
        mintemp: 43.36,
        temp: 43.36,
        weather: "clear sky"
    });

    let setweather = (result)=>{
        setInfo(result);
    }

    return(
        <div>
            <Searchbox setweather={setweather}></Searchbox>
            <br></br>
            <Infobox info={info}></Infobox>
        </div>
    )
}