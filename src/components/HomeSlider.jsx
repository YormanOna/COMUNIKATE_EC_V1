import React from "react";
import "../styles/homeSlider.css";

export function HomeSlider(){
    return(
        <div className="home">
            <h2>Aprende, Descubre, Supérate</h2>
            <br/>
            <p> Comuníkate ofrece cursos directamente vinculados con el área de comunicación social. su enfoque es reforzar a profesionales a nivel nacional con el fin de ayudar a los mismos tener mayor competencia dentro del mercado laboral y los medios de comunicación ecuatorianos.
            </p>
            <div className="btnHome">
                <a href="#" className="btnOne">Leer Mas</a>
                <a href="#" className="btnTwo">Conocenos</a>
            </div>
        </div>
    )
}