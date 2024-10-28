import React, { useState, useEffect } from 'react'; 
import '../../styles/servicios/OficinasIndividuales.css';
import planesData from '../../data/OficinaIndividual.json';

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
          <p>OFICINAS</p>
          <p>INDIVIDUALES</p>
        </div>
        <div className="slider-container-oficinaIndividual">
          <div className="slides-container-oficinaIndividual">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`slide-oficinaIndividual ${index === currentSlide ? 'active-oficinaIndividual' : ''}`}
                style={{ backgroundColor: plan.backgroundColor, color: plan.textColor }}
              >
                <div className="plan-card-oficinaIndividual">
                  <div className="header-container-oficinaIndividual">
                    <h2 className="plan-title-oficinaIndividual">{plan.title}</h2>
                    <button
                      className="contact-button-oficinaIndividual"
                      style={{ backgroundColor: plan.buttonColor, color: plan.buttonTextColor }}
                    >
                      CONTACTAR
                    </button>
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
                    <p className="feature-oficinaIndividual">
                      {plan.privateOfficeHours} Horas en oficina privada
                      <span className="max-persons-oficinaIndividual">
                        <strong>(máximo {plan.maxPrivatePersons} personas)</strong>
                      </span>
                    </p>
                    <p className="feature-oficinaIndividual">
                      {plan.meetingRoomHours} Horas en la sala de reuniones o capacitación
                      <span className="max-persons-oficinaIndividual">
                        <strong>(máximo {plan.maxMeetingPersons} personas)</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
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