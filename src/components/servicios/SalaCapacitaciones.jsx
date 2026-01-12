import React, { useState, useEffect } from 'react';
import '../../styles/servicios/PlanesModernos.css';
import '../../styles/servicios/SalaCapacitaciones.css';
import SalasData from '../../data/SalaCpacitaciones.json';
import oficinaImg from '../../img/Servicios/SALA CAPACITACIONES.jpg'; 
import { Link } from "react-router-dom";
import { Wifi, Volume2, Tv, PenTool, Armchair, Star, Award } from "lucide-react";

export function SalaCapacitaciones() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(SalasData);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % plans.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [plans.length]);

  return (
    <div>
      {/* Sección de encabezado / imagen de fondo */}
      <div className="office-section">
        <img src={oficinaImg} alt="Oficina Individual" className="background-image" />
        <div className="overlay-text">
          <p>SALA DE</p>
          <p>CAPACITACIÓN</p>
        </div>
      </div>

      {/* Slider de planes */}
      <div className="slider-container-oficinaIndividual">
        <div className="slides-container-oficinaIndividual">
          {plans.map((plan, index) => {
            const badges = {
              "PARA 10 PERSONAS": { icon: Star, label: "Ideal para Equipos" },
              "PARA 20 PERSONAS": { icon: Award, label: "Más Popular", highlight: true }
            };
            const badge = badges[plan.title];
            
            const iconMap = {
              "Wifi de alta velocidad": Wifi,
              "Sonido": Volume2,
              "Pantalla de TV": Tv,
              "Pizarra": PenTool,
              "Mesas y sillas": Armchair,
              "Sillas": Armchair
            };
            
            return (
            <div
              key={index}
              className={`slide-oficinaIndividual ${
                index === currentSlide ? 'active-oficinaIndividual' : ''
              }`}
              style={{ backgroundColor: plan.backgroundColor, color: plan.textColor }}
            >
              <div className="plan-card-oficinaIndividual">
                {badge && (
                  <div className={`plan-badge ${badge.highlight ? 'badge-highlight' : ''}`}>
                    <badge.icon size={16} />
                    <span>{badge.label}</span>
                  </div>
                )}
                {/* Título y botón */}
                <div className="header-container-oficinaIndividual">
                  <h2 className="plan-title-oficinaIndividual">{plan.title}</h2>
                  <Link to="/contacto" >
                  <button
                    className="contact-button-oficinaIndividual"
                    style={{ backgroundColor: plan.buttonColor, color: plan.buttonTextColor }}
                  >
                    CONTACTAR
                  </button>
                  </Link>
                </div>

                {/* Precio */}
                <div className="price-container-oficinaIndividual">
                  <span
                    className="price-amount-oficinaIndividual"
                    style={{ color: plan.priceColor }}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className="price-period-oficinaIndividual"
                    style={{ color: plan.priceColor }}
                  >
                    POR HORA
                  </span>
                  <span
                    className="price-tax-oficinaIndividual"
                    style={{ color: plan.priceColor }}
                  >
                    +IVA
                  </span>
                  <br />
                  <div
                    className="divider-line-oficinaIndividual"
                    style={{ backgroundColor: plan.lineColor }}
                  />
                </div>

                {/* Contenidos */}
                <div className="features-container-oficinaIndividual">
                  {["Contenido 1", "Contenido 2", "Contenido 3", "Contenido 4", "Contenido 5"].map((key, idx) => {
                    const content = plan[key];
                    if (!content) return null;
                    const IconComponent = iconMap[content] || Wifi;
                    return (
                      <div key={idx} className="feature-oficinaIndividual">
                        <div className="feature-icon-wrapper">
                          <IconComponent size={18} />
                        </div>
                        <div className="feature-text">
                          {content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );})}
        </div>

        {/* Navegación por puntos (dots) */}
        <div className="dots-container-oficinaIndividual">
          {plans.map((_, index) => (
            <span
              key={index}
              className={`dot-oficinaIndividual ${
                index === currentSlide ? 'active-oficinaIndividual' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
