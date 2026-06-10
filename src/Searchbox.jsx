import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({setweather}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const api_url = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "ee80d138b69e29c2519448629236988b";

    let getWeatherInfo = async (city)=>{
        try{
            let res = await fetch(`${api_url}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonres = await res.json();
            console.log(jsonres);

            let result = {
                city: city,
                temp : jsonres.main.temp,
                mintemp : jsonres.main.temp_min,
                maxtemp : jsonres.main.temp_max,
                humidity: jsonres.main.humidity,
                feelsLike : jsonres.main.feels_like,
                weather : jsonres.weather[0].description,
            };
            
            return result;
        }catch(err){
            throw err
        }
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
       try{
        event.preventDefault();
        setCity("");
        setError(false);
        let info = await getWeatherInfo(city);
        setweather(info);
       }catch(err){
        setError(true);
       }
    }
    return(
        <div>
            <h3>Weather App</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Search for a city" 
                    variant="outlined" required
                    value={city}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <Button 
                type='submit' variant="contained" endIcon={<SendIcon />}>
                Search
                </Button>
                {error && <p>No such place in our API</p>}
                
            </form>
        </div>
    )
}
