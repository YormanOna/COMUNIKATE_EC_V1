import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/footer.css";
import Logo from "../img/LOGO-BLANCO.png";

export function Footer () {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">
          <h2 className="footer-heading">Contacto</h2>
          <h3>Matriz Quito</h3>
          <p className="footer-address">
          Av. Luis Saá y Sodiro, Edificio Daniel Cadena - 9no piso - Oficina 901 (Sector parque La Alameda)
          </p>
          <p className="footer-whatsapp">
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            <span>+593(99) 522 2922</span>
          </p>
          <p className="footer-email">
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            <a href="mailto:info@comunikate.ec">info@comunikate.ec</a>
          </p>
        </div>
        
        <div className="footer-social">
          <h2 className="footer-heading">Redes Sociales</h2>
          <div className="footer-social-icons">
            <a href="https://es-la.facebook.com/ComuniKateEc/" className="footer-social-link" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="footer-social-icon" />
            </a>
            <a href="https://www.instagram.com/comunikateec/" className="footer-social-link" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="footer-social-icon" />
            </a>
            <a href="https://www.tiktok.com/search?q=comunikateec&t=1658168849497" className="footer-social-link" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} className="footer-social-icon" />
            </a>
            <a href="https://n9.cl/krkcf" className="footer-social-link" aria-label="WhatsApp">
            <FontAwesomeIcon icon={faWhatsapp} className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={Logo}/>
        </div>
        <p className="footer-copyright">
          Todos los derechos reservados por Comunikate Ecuador &reg; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

