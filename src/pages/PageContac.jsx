import React from "react";
import "../styles/PageContac.css"; // Asegúrate de importar los estilos con el nombre que uses
import { NavigationMenu } from "../components/NavBar";

// Ejemplo: si usas react-icons, podrías importar íconos así:
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export function PageContac() {
  return (
    <div>
      <NavigationMenu />
      <div className="pageContac">
        {/* Sección izquierda (fondo naranja) */}
        <div className="pageContac-left">
          <h1 className="pageContac-title">CONTACTOS</h1>
          <div className="pageContac-info">
            <p>
              Matiz Quito: Av. Luis Saá y Sadria, Edificio Daniel Cadena - 9no
              piso - Oficina 901
            </p>
            <p>(Sector parque La Alameda)</p>
            <br />
            <p>info@comunikate.ec</p>
            <p>+593 (99) 522 2922</p>
          </div>
          <div className="pageContac-social">
            {/* Ejemplo con placeholders; reemplaza por íconos reales si deseas */}
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTiktok className="social-icon" />
            <div className="pageContac-iconPlaceholder">F</div>
            <div className="pageContac-iconPlaceholder">I</div>
            <div className="pageContac-iconPlaceholder">T</div>
          </div>
          <p className="pageContac-handle">@comunikateec</p>
        </div>

        {/* Sección derecha (fondo gris, formulario) */}
        <div className="pageContac-right">
        <br />
        <br />
          <div className="pageContac-buttonContainer">
            <button className="pageContac-topButton">CONTACTO</button>
          </div>

          <form className="pageContac-form">
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" placeholder="Tu nombre" />

            <label htmlFor="email">E-Mail:</label>
            <input
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
            />

            <label htmlFor="celular">Celular:</label>
            <input
              id="celular"
              type="text"
              placeholder="Tu número de celular"
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
            />

            <button type="submit" className="pageContac-submitButton">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
