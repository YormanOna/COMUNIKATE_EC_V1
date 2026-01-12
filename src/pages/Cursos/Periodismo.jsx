import React from "react";
import "../../styles/Cursos/Periodismo.css";

import imgOratoria from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_UNO.png";
import imgDepor from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_DOS.png";
import imgRadial from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_TRES.png";
import imgRRPP from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_CUATRO.png";
import imgMedia from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_CINCO.png";
import imgPresentador from "../../img/Cursos/Periodismo/Imagenes_Cursos/CURSOS_SEIS.png";

export function Periodismo() {
  const cursos = [
    { 
      href: "/cursos/periodismo/oratoria-locucion", 
      img: imgOratoria, 
      title: "Oratoria y Locución",
      duration: "35 horas",
      level: "Básico - Intermedio"
    },
    { 
      href: "/cursos/periodismo/periodismo-deportivo", 
      img: imgDepor, 
      title: "Periodismo Deportivo",
      duration: "40 horas",
      level: "Intermedio"
    },
    { 
      href: "/cursos/periodismo/locucion-radial", 
      img: imgRadial, 
      title: "Locución Radial",
      duration: "35 horas",
      level: "Básico"
    },
    { 
      href: "/relaciones-publicas", 
      img: imgRRPP, 
      title: "Relaciones Públicas",
      duration: "30 horas",
      level: "Intermedio"
    },
    { 
      href: "/cursos/periodismo/media-training", 
      img: imgMedia, 
      title: "Media Training",
      duration: "25 horas",
      level: "Avanzado"
    },
    { 
      href: "/cursos/periodismo/presentador-tv-medios-digitales", 
      img: imgPresentador, 
      title: "Presentador de TV y Medios Digitales",
      duration: "40 horas",
      level: "Intermedio - Avanzado"
    }
  ];

  return (
    <section className="periodismo-container" id="periodismo">
      {/* Título de sección */}
      <div className="periodismo-header">
        <div className="periodismo-title-wrapper">
          <i className="fas fa-microphone-alt"></i>
          <h1>PERIODISMO</h1>
          <i className="fas fa-microphone-alt"></i>
        </div>
        <p className="periodismo-description">Desarrolla tus habilidades en comunicación y medios profesionales</p>
      </div>

      {/* Grid de cursos */}
      <div className="periodismo-grid">
        {cursos.map((curso, index) => (
          <a 
            key={index}
            href={curso.href} 
            className="periodismo-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="periodismo-image-wrapper">
              <img src={curso.img} alt={curso.title} />
              <div className="periodismo-badge">
                <i className="fas fa-certificate"></i> Certificado
              </div>
            </div>
            <div className="periodismo-overlay">
              <h3 className="periodismo-course-title">{curso.title}</h3>
              <div className="periodismo-info">
                <span className="periodismo-info-item">
                  <i className="far fa-clock"></i> {curso.duration}
                </span>
                <span className="periodismo-info-item">
                  <i className="fas fa-signal"></i> {curso.level}
                </span>
              </div>
              <div className="periodismo-cta">
                Ver más <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}