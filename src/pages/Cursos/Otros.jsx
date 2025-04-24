import React from "react";
import "../../styles/Cursos/OtrosStyle.css";

// Importa tus imágenes (ajusta las rutas según tu proyecto)
import ImgVentas from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_UNO.png";
import ImgCompras from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_DOS.png";
import ImgFormador from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_TRES.png";

export function Otros() {
    return (
      <section className="otros-container" id="otros">
        {/* Fila central con 3 imágenes (cada una con enlace y overlay centrado) */}
        <div className="otros-row">
          <a href="/cursos" className="otros-card">
            <img src={ImgVentas} alt="Ventas" />
            <div className="otros-overlay">Ventas</div>
          </a>
  
          <a href="/cursos" className="otros-card">
            <img src={ImgCompras} alt="Compras Públicas" />
            <div className="otros-overlay">Compras Públicas</div>
          </a>
  
          <a href="/cursos" className="otros-card">
            <img src={ImgFormador} alt="Formador de Formadores" />
            <div className="otros-overlay">Formador de Formadores</div>
          </a>
        </div>
  
        {/* Sección inferior con el título "OTROS" */}
        <div className="otros-middle">
          <h1>OTROS</h1>
        </div>
      </section>
    );
  }
