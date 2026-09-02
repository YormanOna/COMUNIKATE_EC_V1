import React from 'react';
import { Link } from 'react-router-dom';
import horarioImg from '../../img/Servicios/Image horarios.webp';
import '../../styles/servicios/HorarioSection.css';

export function HorarioSection() {
  return (
    <section className="horario-section" aria-labelledby="horario-heading">
      <div className="horario-container">
        {/* Imagen */}
        <div className="horario-image">
          <img
            src={horarioImg}
            alt="Horario de uso de los servicios de Comunikate EC"
            loading="lazy"
          />
          <div className="horario-badge" aria-hidden="true">
            <i className="fas fa-clock" aria-hidden="true" />
          </div>
        </div>

        {/* Contenido */}
        <div className="horario-content">
          <div className="horario-header">
            <i className="fas fa-calendar-alt horario-icon" aria-hidden="true" />
            <h2 id="horario-heading">Horario de uso de nuestros servicios</h2>
          </div>

          <div className="horario-info">
            <div className="horario-item">
              <i className="fas fa-business-time" aria-hidden="true" />
              <div>
                <h3>Lunes a Viernes</h3>
                <p>08:00 – 18:00</p>
              </div>
            </div>

            <div className="horario-item horario-item-weekend">
              <i className="fas fa-calendar-week" aria-hidden="true" />
              <div>
                <h3>Sábados y Domingos</h3>
                <p>A convenir</p>
              </div>
            </div>
          </div>

          <Link to="/contacto" className="horario-cta">
            <i className="fas fa-phone-alt" aria-hidden="true" />
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
