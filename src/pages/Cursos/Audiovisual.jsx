import React from "react";
import "../../styles/Cursos/AudiovisualStyle.css";

// Importa tus imágenes (ajusta las rutas según tu proyecto)
import ImgProduccion from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_UNO.png";
import ImgFotografia from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_CUATRO.png";
import ImgPodcast from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_DOS.png";
import ImgStreaming from "../../img/Cursos/Audiovisual/Imagenes_Cursos/Imagen_TRES.png";

export function Audiovisual() {
  const cursos = [
    { 
      href: "/cursos/audiovisual/produccion-audiovisual", 
      img: ImgProduccion, 
      title: "Producción Audiovisual",
      duration: "45 horas",
      level: "Intermedio"
    },
    { 
      href: "/cursos/audiovisual/fotografia", 
      img: ImgFotografia, 
      title: "Fotografía Profesional",
      duration: "30 horas",
      level: "Básico - Intermedio"
    },
    { 
      href: "/cursos/audiovisual/creacion-de-podcast", 
      img: ImgPodcast, 
      title: "Creación de Podcast",
      duration: "25 horas",
      level: "Básico"
    },
    { 
      href: "/cursos/audiovisual/live-streaming", 
      img: ImgStreaming, 
      title: "Live Streaming",
      duration: "20 horas",
      level: "Intermedio"
    }
  ];

  return (
    <section className="audiovisual-container" id="audiovisual">
      {/* Título de sección */}
      <div className="audiovisual-header">
        <div className="audiovisual-title-wrapper">
          <i className="fas fa-video"></i>
          <h1>AUDIOVISUAL</h1>
          <i className="fas fa-video"></i>
        </div>
        <p className="audiovisual-description">Domina el arte de la producción visual y crea contenido profesional</p>
      </div>

      {/* Grid de cursos */}
      <div className="audiovisual-grid">
        {cursos.map((curso, index) => (
          <a 
            key={index}
            href={curso.href} 
            className="audiovisual-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="audiovisual-image-wrapper">
              <img src={curso.img} alt={curso.title} />
              <div className="audiovisual-badge">
                <i className="fas fa-certificate"></i> Certificado
              </div>
            </div>
            <div className="audiovisual-overlay">
              <h3 className="audiovisual-course-title">{curso.title}</h3>
              <div className="audiovisual-info">
                <span className="audiovisual-info-item">
                  <i className="far fa-clock"></i> {curso.duration}
                </span>
                <span className="audiovisual-info-item">
                  <i className="fas fa-signal"></i> {curso.level}
                </span>
              </div>
              <div className="audiovisual-cta">
                Ver más <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
