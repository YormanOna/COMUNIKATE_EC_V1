import React, { useState, useEffect } from 'react'; 
import '../../styles/servicios/PlanesModernos.css';
import '../../styles/servicios/OficinasIndividuales.css';
import planesData from '../../data/OficinaIndividual.json';
import oficinaImg from '../../img/Servicios/Oficina Individual.jpg'; 
import { Link } from "react-router-dom";
import { Clock, Users, Star, TrendingUp, Award, Zap, Briefcase } from "lucide-react";

export function OficinasIndividuales() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [plans, setPlans] = useState([]);
  
    useEffect(() => {
      setPlans(planesData);
    }, []);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % plans.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [plans.length]);
  
    return (
      <div>
        <div className="office-section">
          <img src={oficinaImg} alt="Oficina Individual" className="background-image" />
          <div className="overlay-text">
            <p>OFICINAS</p>
            <p>INDIVIDUALES</p>
          </div>
        </div>
        <div className="slider-container-oficinaIndividual">
          <div className="slides-container-oficinaIndividual">
            {plans.map((plan, index) => {
              const badges = {
                "BASIC": { icon: Star, label: "Ideal para Empezar" },
                "STANDARD": { icon: TrendingUp, label: "Más Popular", highlight: true },
                "SPECIAL": { icon: Award, label: "Mejor Valor" },
                "PREMIUM": { icon: Zap, label: "Máximo Beneficio" }
              };
              const badge = badges[plan.title];
              
              return (
              <div
                key={index}
                className={`slide-oficinaIndividual ${index === currentSlide ? 'active-oficinaIndividual' : ''}`}
                style={{ backgroundColor: plan.backgroundColor, color: plan.textColor }}
              >
                <div className="plan-card-oficinaIndividual">
                  {badge && (
                    <div className={`plan-badge ${badge.highlight ? 'badge-highlight' : ''}`}>
                      <badge.icon size={16} />
                      <span>{badge.label}</span>
                    </div>
                  )}
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
                  
                  <div className="price-container-oficinaIndividual">
                    <span className="price-amount-oficinaIndividual" style={{ color: plan.priceColor }}>
                      ${plan.price}
                    </span>
                    <span className="price-period-oficinaIndividual" style={{ color: plan.priceColor }}>MENSUAL</span>
                    <span className="price-tax-oficinaIndividual" style={{ color: plan.priceColor }}>
                      +IVA
                    </span>
                    <br />
                    <div className="divider-line-oficinaIndividual" style={{ backgroundColor: plan.lineColor }}></div>
                  </div>
                  
                  <div className="features-container-oficinaIndividual">
                    <div className="feature-oficinaIndividual">
                      <div className="feature-icon-wrapper">
                        <Briefcase size={18} />
                      </div>
                      <div className="feature-text">
                        <strong>{plan.privateOfficeHours} Horas</strong> en oficina privada
                        <span className="max-persons-oficinaIndividual">
                          <strong>(máximo {plan.maxPrivatePersons} personas)</strong>
                        </span>
                      </div>
                    </div>
                    <div className="feature-oficinaIndividual">
                      <div className="feature-icon-wrapper">
                        <Users size={18} />
                      </div>
                      <div className="feature-text">
                        <strong>{plan.meetingRoomHours} Horas</strong> en la sala de reuniones o capacitación
                        <span className="max-persons-oficinaIndividual">
                          <strong>(máximo {plan.maxMeetingPersons} personas)</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );})}
          </div>
          
          <div className="dots-container-oficinaIndividual">
            {plans.map((_, index) => (
              <span
                key={index}
                className={`dot-oficinaIndividual ${index === currentSlide ? 'active-oficinaIndividual' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}