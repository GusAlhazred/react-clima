import "./style/CardClima.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faCloud, faCloudBolt, faCloudMoon, faCloudRain, faCloudSun } from "@fortawesome/free-solid-svg-icons";
// import { Cloud, renderSimpleIcon } from "react-icon-cloud"


const CardClima = ({key, dia, temperatura, viento, descripcion }) => {
  const asignarIcono = () => {
    // console.log(descripcion)
    if (descripcion === "Partly cloudy"){ return (faCloudSun) } 
    if (descripcion === "Sunny"){ return (faSun) }
    if (descripcion === "Cloudy"){ return (faCloud) }
    if (descripcion === "Thunder Storm"){ return (faCloudBolt) }
    if (descripcion === "Partially Clear"){ return (faCloudMoon) }
    if (descripcion === "Rainy"){ return (faCloudRain) }
    if (descripcion === "Light rain shower"){ return (faCloudRain) }
    if (descripcion === "Clear"){ return (faMoon) }
  } 
  return(
    <div className="container rounded m-3 p-3 border shadow-lg cardClima text-white d-flex">
    <div className="">
      <h2>{
          dia==="Ahora"? 
            dia 
          :
            parseInt(dia) > 1? 
              `En ${dia} dias` : `Mañana`
      }</h2>
      <p>Temperatura: {temperatura} </p>
      <p>Viento: {viento}</p>
      {descripcion && <p>Descripcion: {descripcion} </p>}
    </div>
    <div className="fs-1 m-4 p-3">
      {descripcion && <FontAwesomeIcon icon={asignarIcono()} />}
    </div>

    </div>

  )
}



export default CardClima