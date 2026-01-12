import React, { useEffect } from "react";
import { OficinasIndividuales } from "../components/servicios/OficinasIndividuales";
import { NavigationMenu } from "../components/NavBar";
import { PuestosIndividuales } from "../components/servicios/PuestosIndividuales";
import { ContenidoAdicional } from "../components/servicios/ContenidoAdicional";
import { CoworkingSection } from "../components/servicios/CoworkingSection.jsx";
import { SectionSecond } from "../components/servicios/SectionSecond.jsx";
import {SalaCapacitaciones} from "../components/servicios/SalaCapacitaciones";
import ImagenNueva from "../img/Servicios/Image2.jpg";
import horarioImg from "../img/Servicios/Image horarios.jpg";
import { Footer } from "../components/footer.jsx";


export function Servicios() {
  useEffect(() => {
    document.title = "Servicios de Coworking | Comunikate Ecuador";
  }, []);
  
  return (
    <div>
      <NavigationMenu />
      <CoworkingSection />
      <SectionSecond />
      <OficinasIndividuales />
      <PuestosIndividuales />
      <SalaCapacitaciones />
      
      {/* Hero Section Mejorada */}
      <section className="hero-section">
        <img src={ImagenNueva} className="backgroundNuevo-image" alt="Espacio de trabajo" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ya no sigas trabajando</h1>
            <h1>solo en casa</h1>
            <p className="hero-subtitle">Únete a nuestra comunidad profesional</p>
            <a href="#contacto" className="hero-cta-button">
              <i className="fas fa-calendar-check"></i> Agenda tu visita
            </a>
          </div>
        </div>
      </section>

      <ContenidoAdicional />
      
      {/* Sección de Horarios Mejorada */}
      <div className="horario-section">
        <div className="horario-container">
          <div className="horario-image">
            <img src={horarioImg} alt="Horario de uso" />
            <div className="horario-badge">
              <i className="fas fa-clock"></i>
            </div>
          </div>

          <div className="horario-content">
            <div className="horario-header">
              <i className="fas fa-calendar-alt horario-icon"></i>
              <h2>Horario de uso de nuestros servicios</h2>
            </div>
            
            <div className="horario-info">
              <div className="horario-item">
                <i className="fas fa-business-time"></i>
                <div>
                  <h3>Lunes a Viernes</h3>
                  <p>08:00 - 18:00</p>
                </div>
              </div>
              
              <div className="horario-item horario-item-weekend">
                <i className="fas fa-calendar-week"></i>
                <div>
                  <h3>Sábados y Domingos</h3>
                  <p>A convenir</p>
                </div>
              </div>
            </div>
            
            <a href="/contacto" className="horario-cta">
              <i className="fas fa-phone-alt"></i> Contáctanos
            </a>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  );
}
