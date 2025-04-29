import React from "react";
import "../../styles/Cursos/SocialMediaStyle.css";
import bgSocial from "../../img/Cursos/SocialMedia/Imagenes_Cursos/AUDIOVISUAL.webp";

export function SocialMedia() {
  return (
    <section className="socialmedia-container" id="socialMedia">
      <div className="socialmedia-bg">
        <img
          src={bgSocial}
          alt="Fondo Social Media"
          className="socialmedia-image"
        />
        <div className="socialmedia-overlay">
          <h1>SOCIAL MEDIA</h1>
          <a
            href="/cursos/social-media/marketing-digital"
            className="socialmedia-link"
          >
            Marketing Digital
          </a>
        </div>
      </div>
    </section>
  );
}
