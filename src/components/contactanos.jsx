import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.css'
export function ContactComponent () {
  return (
    <div className="contact-outer-container">
      <div className="contact-inner-container">
        <div className="contact-header">
          <h1>CONTACTOS</h1>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <div className="contact-text">
                <strong>Matriz Quito:</strong>
                <p>Av. Luis Saá y Sodiro, Edificio Daniel Cadena - 9no piso </p>
                <p>Oficina 901 (Sector parque La Alameda)</p>
              </div>
              <div className="contact-text">
                <strong>Sucursales</strong>
                <ul className='sucursales-list'>
                  <ol>Guayaquil</ol>
                  <ol>Cuenca</ol>
                  <ol>Santo Domingo de los Tsáchilas</ol>
                </ul>
                </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <p>+593(99) 522 2922</p>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>info@comunikate.ec</p>
            </div>

            <div className="social-section">
              <div className="social-icons">
                <a href="https://www.facebook.com/ComuniKateEc/" className="social-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/comunikateec/" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.tiktok.com/search?q=comunikateec&t=1658168849497" className="social-link">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
              <p className="social-handle">@comunicateec</p>
            </div>

            <Link to="/contacto">
  <button className="consult-button">CONSÚLTANOS YA</button>
</Link>

          </div>
          <br />
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7904015935846!2d-78.50055259999999!3d-0.21434299999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bd595f6a6a5%3A0xcf57d1528fd56e10!2sComunikate%20Ecuador!5e0!3m2!1ses-419!2sec!4v1742586743928!5m2!1ses-419!2sec"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
