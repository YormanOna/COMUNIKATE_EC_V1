import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/servicios/HeroSection.css';

/**
 * HeroSection genérico — reemplaza CoworkingSection y SectionSecond.
 * Props:
 *   imageSrc  {string}  — ruta de la imagen de fondo
 *   title     {string}  — línea principal
 *   subtitle  {string}  — barra naranja debajo (opcional)
 *   imageAlt  {string}  — texto alternativo accesible
 */
export function HeroSection({ imageSrc, title, subtitle, imageAlt = 'Imagen de sección' }) {
  return (
    <section className="hero-section-banner" aria-label={title}>
      <div className="hero-section-banner__image-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="hero-section-banner__image"
          loading="lazy"
        />
        <div className="hero-section-banner__overlay" aria-hidden="true" />
        <div className="hero-section-banner__title-wrapper">
          <h2 className="hero-section-banner__title">{title}</h2>
        </div>
      </div>
      {subtitle && (
        <div className="hero-section-banner__bar" role="presentation">
          <p className="hero-section-banner__subtitle">{subtitle}</p>
        </div>
      )}
    </section>
  );
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageAlt: PropTypes.string,
};
