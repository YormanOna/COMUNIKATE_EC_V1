import React from "react";
import "../../styles/Cursos/SocialMediaStyle.css";

// Ajusta la ruta de la imagen de fondo a la de tu proyecto
import bgSocial from "../../img/Cursos/SocialMedia/Imagenes_Cursos/AUDIOVISUAL.webp";

export function SocialMedia() {
  return (
    <section className="socialmedia-container" id="socialMedia">
      {/* Contenedor que incluye la imagen de fondo y las barras */}
      <div className="socialmedia-bg">
        <img src={bgSocial} alt="Fondo Social Media" className="socialmedia-image" />

        {/* Franja naranja centrada con el título */}
        <div className="socialmedia-orange-bar">
          <h1>SOCIAL MEDIA</h1>
        </div>

        {/* Franja blanca debajo con subtítulo, ahora clicable */}
        <a href="/cursos/social-media/marketing-digital" className="socialmedia-white-bar">
          <p>Marketing Digital</p>
        </a>
      </div>
    </section>
  );
}
