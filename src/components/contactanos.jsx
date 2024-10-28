import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <p>Av. Luis Saá y Sodiro, Edificio Daniel Cadena - 9no piso - Oficina 901 (Sector parque La Alameda)</p>
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
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-link">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
              <p className="social-handle">@comunicateec</p>
            </div>

            <button className="consult-button">CONSÚLTANOS YA</button>
          </div>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.461035086821!2d-78.50297!3d-0.21567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTInNTYuNCJTIDc4wrAzMCcxMC43Ilc!5e0!3m2!1sen!2sec!4v1635181234567!5m2!1sen!2sec"
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
