import React from "react";
import "../../styles/Cursos/AudiovisualStyle.css";

// Importa tus imágenes (ajusta las rutas según tu proyecto)
import ImgProduccion from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_UNO.png";
import ImgFotografia from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_CUATRO.png";
import ImgPodcast from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_DOS.png";
import ImgStreaming from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_TRES.png";

export function Audiovisual() {
  return (
    <section className="audiovisual-container" id="audiovisual">
      {/* Primera fila de tarjetas */}
      <div className="audiovisual-row">
        <a href="/produccion-audiovisual" className="audiovisual-card">
          <img src={ImgProduccion} alt="Producción Audiovisual" />
          <div className="audiovisual-overlay">Producción Audiovisual</div>
        </a>

        <a href="/fotografia" className="audiovisual-card">
          <img src={ImgFotografia} alt="Fotografía" />
          <div className="audiovisual-overlay">Fotografía</div>
        </a>
      </div>

      {/* Franja central con el título */}
      <div className="audiovisual-middle">
        <h1>AUDIOVISUAL</h1>
      </div>

      {/* Segunda fila de tarjetas */}
      <div className="audiovisual-row">
        <a href="/creacion-de-podcast" className="audiovisual-card">
          <img src={ImgPodcast} alt="Creación de Podcast" />
          <div className="audiovisual-overlay">Creación de Podcast</div>
        </a>

        <a href="/streaming" className="audiovisual-card">
          <img src={ImgStreaming} alt="Streaming" />
          <div className="audiovisual-overlay">Streaming</div>
        </a>
      </div>
    </section>
  );
}
