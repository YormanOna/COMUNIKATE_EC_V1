import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/servicios/ServicesCTA.css';

export function ServicesCTA() {
  return (
    <section className="services-cta" aria-labelledby="cta-heading">
      <div className="services-cta__inner">
        <p className="services-cta__eyebrow">¿Listo para empezar?</p>
        <h2 id="cta-heading" className="services-cta__heading">
          Encuentra el espacio ideal para ti
        </h2>
        <p className="services-cta__body">
          Agenda una visita gratuita y conoce nuestras instalaciones.&nbsp;
          Sin compromisos, sin costos ocultos.
        </p>
        <div className="services-cta__buttons">
          <Link to="/contacto" className="services-cta__btn services-cta__btn--primary">
            <i className="fas fa-calendar-check" aria-hidden="true" />
            Agenda tu visita
          </Link>
          <Link to="/contacto" className="services-cta__btn services-cta__btn--secondary">
            <i className="fas fa-phone-alt" aria-hidden="true" />
            Habla con nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}
