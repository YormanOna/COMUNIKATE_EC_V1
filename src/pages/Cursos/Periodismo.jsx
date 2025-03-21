import React from "react";
import "../../styles/Cursos/Periodismo.css";

import imgOratoria from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_UNO.png";
import imgDepor from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_DOS.png";
import imgRadial from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_TRES.png";
import imgRRPP from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_CUATRO.png";
import imgMedia from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_CINCO.png";
import imgPresentador from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_SEIS.png";

export function Periodismo() {
  return (
    <section className="periodismo-container" id="periodismo">
      {/* Primera fila de tarjetas */}
      <div className="periodismo-row">
        <a href="/oratoria-locucion" className="periodismo-card">
          <img src={imgOratoria} alt="Oratoria y Locución" />
          <div className="periodismo-overlay">Oratoria y Locución</div>
        </a>

        <a href="/periodismo-deportivo" className="periodismo-card">
          <img src={imgDepor} alt="Periodismo Deportivo" />
          <div className="periodismo-overlay">Periodismo Deportivo</div>
        </a>

        <a href="/locucion-radial" className="periodismo-card">
          <img src={imgRadial} alt="Locución Radial" />
          <div className="periodismo-overlay">Locución Radial</div>
        </a>
      </div>

      {/* Franja central con título */}
      <div className="periodismo-middle">
        <h1>PERIODISMO</h1>
      </div>

      {/* Segunda fila de tarjetas */}
      <div className="periodismo-row">
        <a href="/relaciones-publicas" className="periodismo-card">
          <img src={imgRRPP} alt="Relaciones Públicas" />
          <div className="periodismo-overlay">Relaciones Públicas</div>
        </a>

        <a href="/media-training" className="periodismo-card">
          <img src={imgMedia} alt="Media Training" />
          <div className="periodismo-overlay">Media Training</div>
        </a>

        <a
          href="/presentador-tv-medios-digitales"
          className="periodismo-card"
        >
          <img
            src={imgPresentador}
            alt="Presentador de TV y Medios Digitales"
          />
          <div className="periodismo-overlay">
            Presentador de TV y Medios Digitales
          </div>
        </a>
      </div>
    </section>
  );
}