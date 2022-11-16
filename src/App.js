import React, { useEffect, useState } from 'react';
import './App.css';
import CardClima from "./components/cardClima";
import axios from "axios";

function App() {
  const API_URL = "https://goweather.herokuapp.com/weather/Temperley";
  const [clima, setClima] = useState([]);
  // const [pronostico, setPronostico] = useState([]);
  

  const getInformation = async () => {
    try {
      const response = await axios.get(API_URL);
      const ahora = {
        day: "Ahora",
        temperature:`${response.data.temperature}`,
        wind:`${response.data.wind}`,
        descripcion:`${response.data.description}`,
      };
      
      const climaYPronostico = response.data.forecast;
      climaYPronostico.unshift(ahora);
      

      setClima(climaYPronostico);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect((()=>{
    // setClima({"temperature":"18 °C","wind":"13 km/h","description":"Partly cloudy","forecast":[{"day":"1","temperature":"18 °C","wind":"12 km/h"},{"day":"2","temperature":"28 °C","wind":"14 km/h"},{"day":"3","temperature":"33 °C","wind":"10 km/h"}]})
    getInformation()
    
  }),[])

  return (
    <div className="">
      {
        clima.map((item, index) =>
        <CardClima 
          key = {index}
          dia= {item.day}
          temperatura= {item.temperature}
          viento= {item.wind}
          descripcion= {item.descripcion}
          />)
      }
    </div>
  );
}

export default App;
