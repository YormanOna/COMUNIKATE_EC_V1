import React from "react";
import "../../styles/Cursos/SocialMediaStyle.css";
import bgSocial from "../../img/Cursos/SocialMedia/Imagenes_Cursos/AUDIOVISUAL.webp";

export function SocialMedia() {
  const cursos = [
    { 
      href: "/cursos/social-media/marketing-digital", 
      img: bgSocial, 
      title: "Marketing Digital",
      duration: "40 horas",
      level: "Básico - Intermedio"
    }
  ];

  return (
    <section className="socialmedia-container" id="socialMedia">
      {/* Título de sección */}
      <div className="socialmedia-header">
        <div className="socialmedia-title-wrapper">
          <i className="fas fa-hashtag"></i>
          <h1>SOCIAL MEDIA</h1>
          <i className="fas fa-hashtag"></i>
        </div>
        <p className="socialmedia-description">Conquista las redes sociales y aprende estrategias de marketing digital efectivas</p>
      </div>

      {/* Grid de cursos */}
      <div className="socialmedia-grid">
        {cursos.map((curso, index) => (
          <a 
            key={index}
            href={curso.href} 
            className="socialmedia-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="socialmedia-image-wrapper">
              <img src={curso.img} alt={curso.title} />
              <div className="socialmedia-badge">
                <i className="fas fa-certificate"></i> Certificado
              </div>
            </div>
            <div className="socialmedia-overlay">
              <h3 className="socialmedia-course-title">{curso.title}</h3>
              <div className="socialmedia-info">
                <span className="socialmedia-info-item">
                  <i className="far fa-clock"></i> {curso.duration}
                </span>
                <span className="socialmedia-info-item">
                  <i className="fas fa-signal"></i> {curso.level}
                </span>
              </div>
              <div className="socialmedia-cta">
                Ver más <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
