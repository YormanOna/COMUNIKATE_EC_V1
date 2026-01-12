import React from "react";
import "../../styles/Cursos/OtrosStyle.css";

// Importa tus imágenes (ajusta las rutas según tu proyecto)
import ImgVentas from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_UNO.png";
import ImgCompras from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_DOS.png";
import ImgFormador from "../../img/Cursos/Otros/Imagenes_Otros/OTROS_TRES.png";

export function Otros() {
  const cursos = [
    { 
      href: "/cursos", 
      img: ImgVentas, 
      title: "Ventas Profesionales",
      duration: "30 horas",
      level: "Básico - Intermedio"
    },
    { 
      href: "/cursos", 
      img: ImgCompras, 
      title: "Compras Públicas",
      duration: "35 horas",
      level: "Intermedio"
    },
    { 
      href: "/cursos", 
      img: ImgFormador, 
      title: "Formador de Formadores",
      duration: "40 horas",
      level: "Avanzado"
    }
  ];

  return (
    <section className="otros-container" id="otros">
      {/* Título de sección */}
      <div className="otros-header">
        <div className="otros-title-wrapper">
          <i className="fas fa-graduation-cap"></i>
          <h1>OTROS CURSOS</h1>
          <i className="fas fa-graduation-cap"></i>
        </div>
        <p className="otros-description">Amplía tus habilidades con cursos especializados de desarrollo profesional</p>
      </div>

      {/* Grid de cursos */}
      <div className="otros-grid">
        {cursos.map((curso, index) => (
          <a 
            key={index}
            href={curso.href} 
            className="otros-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="otros-image-wrapper">
              <img src={curso.img} alt={curso.title} />
              <div className="otros-badge">
                <i className="fas fa-certificate"></i> Certificado
              </div>
            </div>
            <div className="otros-overlay">
              <h3 className="otros-course-title">{curso.title}</h3>
              <div className="otros-info">
                <span className="otros-info-item">
                  <i className="far fa-clock"></i> {curso.duration}
                </span>
                <span className="otros-info-item">
                  <i className="fas fa-signal"></i> {curso.level}
                </span>
              </div>
              <div className="otros-cta">
                Ver más <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
