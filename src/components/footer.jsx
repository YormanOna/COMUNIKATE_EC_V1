import React from 'react';
import "../styles/footer.css";
import Logo from "../img/LOGO-BLANCO.png";  // Asegúrate de que la ruta de tu logo sea correcta

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Comunikate Logo" />
        </div>
        <p className="footer-copyright">
          Todos los derechos reservados por Comunikate Academy &reg; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};
