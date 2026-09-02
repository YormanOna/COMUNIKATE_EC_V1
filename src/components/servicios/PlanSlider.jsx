import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../styles/servicios/PlanesModernos.css';
import '../../styles/servicios/OficinasIndividuales.css';

/**
 * PlanSlider — Slider genérico y reutilizable de tarjetas de planes.
 *
 * Props:
 *   plans          {Array}    — array de objetos de planes desde JSON
 *   renderFeatures {Function} — función (plan) => JSX con las features específicas
 *   badgeMap       {Object}   — mapa { [plan.title]: { icon, label, highlight? } }
 *                               Si no se pasa, usa los badges por defecto.
 */

export function PlanSlider({ plans = [], renderFeatures }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-avance — protegido contra plans vacío
  const advance = useCallback(() => {
    if (plans.length < 2) return;
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  }, [plans.length]);

  useEffect(() => {
    if (plans.length < 2) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance, plans.length]);

  if (plans.length === 0) return null;

  return (
    <div className="slider-container-oficinaIndividual">
      <div
        className="slides-container-oficinaIndividual"
        role="region"
        aria-label="Planes disponibles"
        aria-live="polite"
      >
        {plans.map((plan, index) => {
          const isActive = index === currentSlide;

          return (
            <div
              key={plan.title ?? index}
              className={`slide-oficinaIndividual${isActive ? ' active-oficinaIndividual' : ''}`}
              data-plan-theme={plan.backgroundColor === 'white' ? 'light' : 'accent'}
              aria-hidden={!isActive}
              style={{ color: plan.textColor }}
            >
              <div className="plan-card-oficinaIndividual">
                {/* Badge de destacado */}
                {/* Cabecera: título + botón */}
                <div className="header-container-oficinaIndividual">
                  <h3 className="plan-title-oficinaIndividual">{plan.title}</h3>
                  <button
                    className="contact-button-oficinaIndividual"
                    style={{
                      backgroundColor: plan.buttonColor,
                      color: plan.buttonTextColor,
                    }}
                    onClick={() => navigate('/contacto')}
                    aria-label={`Contactar sobre el plan ${plan.title}`}
                  >
                    CONTACTAR
                  </button>
                </div>

                {/* Precio */}
                <div className="price-container-oficinaIndividual">
                  <span
                    className="price-amount-oficinaIndividual"
                    style={{ color: '#f56600', WebkitTextFillColor: '#f56600' }}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className="price-period-oficinaIndividual"
                  >
                    {plan.pricePeriod ?? 'MENSUAL'}
                  </span>
                  <span
                    className="price-tax-oficinaIndividual"
                  >
                    +IVA
                  </span>
                  <div
                    className="divider-line-oficinaIndividual"
                    style={{ backgroundColor: plan.lineColor }}
                  />
                </div>

                {/* Features — delegadas al padre */}
                <div className="features-container-oficinaIndividual">
                  {renderFeatures ? renderFeatures(plan) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navegación por dots */}
      {plans.length > 1 && (
        <div
          className="dots-container-oficinaIndividual"
          role="tablist"
          aria-label="Seleccionar plan"
        >
          {plans.map((plan, index) => (
            <button
              type="button"
              key={plan.title ?? index}
              role="tab"
              tabIndex={0}
              aria-selected={index === currentSlide}
              aria-label={`Plan ${plan.title ?? index + 1}`}
              className={`dot-oficinaIndividual${index === currentSlide ? ' active-oficinaIndividual' : ''}`}
              onClick={() => setCurrentSlide(index)}
              onKeyDown={(e) =>
                (e.key === 'Enter' || e.key === ' ') && setCurrentSlide(index)
              }
            >
              <span className="sr-only">{`Seleccionar plan ${plan.title ?? index + 1}`}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

PlanSlider.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    priceColor: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  renderFeatures: PropTypes.func,
};
