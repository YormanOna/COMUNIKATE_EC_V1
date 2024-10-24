import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.css';

export function ContactComponent () {
  return (
    <div className="container-contacto">
      <div className="info-contacto">
        <h1 className="titulo-contacto">CONTACTOS</h1>
        
        <div className="detalles-contacto">
          <div className="item-contacto">
            <FontAwesomeIcon icon={faLocationDot} className="icono-contacto ubicacion-contacto" />
            <div className="texto-contacto">
              <strong>Matriz Quito:</strong>
              <p>Av. Luis Saá y Sodiro, Edificio Daniel Cadena - 9no piso - Oficina 901 (Sector parque La Alameda)</p>
            </div>
          </div>

          <div className="item-contacto">
            <FontAwesomeIcon icon={faPhone} className="icono-contacto" />
            <p>+593(99) 522 2922</p>
          </div>

          <div className="item-contacto">
            <FontAwesomeIcon icon={faEnvelope} className="icono-contacto" />
            <p>info@comunikate.ec</p>
          </div>

          <div className="social-contacto">
            <a href="#" className="social-icon-contacto">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon-contacto">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="social-icon-contacto">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <p className="social-handle-contacto">@comunicatee.ec</p>
          </div>

          <button className="boton-contacto">CONSÚLTANOS YA</button>
        </div>
      </div>

      <div className="mapa-contacto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.461035086821!2d-78.50297!3d-0.21567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTInNTYuNCJTIDc4wrAzMCcxMC43Ilc!5e0!3m2!1sen!2sec!4v1635181234567!5m2!1sen!2sec"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
