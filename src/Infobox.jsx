import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Infobox({info}){
    const img_url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hoturl = "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=1024x1024&w=is&k=20&c=QhEOtUgcu5E94FWjghUGyMZMUSF3DckCOvL7OqfgAVE=";
    const cold_url = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url= "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={info.humidity>75 ? rain_url : info.temp>25 ? hoturl : cold_url}
                    title="dusty"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{info.humidity>70?<UmbrellaIcon/>: info.temp>25 ? <SunnyIcon></SunnyIcon> : <AcUnitIcon></AcUnitIcon> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                        <span>Temperature: {info.temp}&deg;C</span>
                        <br></br>
                        <span>(Feels Like  {info.feelsLike}&deg;C)</span>
                        <br></br>
                        <span>Min Temperature: {info.mintemp}&deg;C</span>&nbsp;&nbsp;
                        <br></br>
                        <span>Max Temperature: {info.maxtemp}&deg;C</span>
                        <br></br>
                        <span>Humidity: {info.humidity}</span>
                        <br></br>
                        <span>Overall Weather : {info.weather}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}