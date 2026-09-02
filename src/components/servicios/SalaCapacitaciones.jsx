import React from 'react';
import { Wifi, Volume2, Tv, PenTool, Armchair, Star, Award } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { PlanSlider } from './PlanSlider';
import salasData from '../../data/SalaCpacitaciones.json';
import salaImg from '../../img/Servicios/SALA CAPACITACIONES.webp';

const BADGE_MAP = {
  'PARA 10 PERSONAS': { icon: Star,  label: 'Ideal para Equipos' },
  'PARA 20 PERSONAS': { icon: Award, label: 'Más Popular', highlight: true },
};

const ICON_MAP = {
  'Wifi de alta velocidad': Wifi,
  'Sonido':                 Volume2,
  'Pantalla de TV':         Tv,
  'Pizarra':                PenTool,
  'Mesas y sillas':         Armchair,
  'Sillas':                 Armchair,
};

const CONTENT_KEYS = ['Contenido 1', 'Contenido 2', 'Contenido 3', 'Contenido 4', 'Contenido 5'];

// Agrega pricePeriod a cada plan de sala para mostrar "POR HORA"
const salasConPeriod = salasData.map((p) => ({ ...p, pricePeriod: 'POR HORA' }));

function renderFeatures(plan) {
  return CONTENT_KEYS.map((key) => {
    const label = plan[key];
    if (!label) return null;
    const IconComponent = ICON_MAP[label] ?? Wifi;
    return (
      <div key={key} className="feature-oficinaIndividual">
        <div className="feature-icon-wrapper">
          <IconComponent size={18} aria-hidden="true" />
        </div>
        <div className="feature-text">{label}</div>
      </div>
    );
  });
}

export function SalaCapacitaciones() {
  return (
    <article>
      <HeroSection
        imageSrc={salaImg}
        imageAlt="Sala de capacitación en Comunikate EC"
        title="SALA DE CAPACITACIÓN"
      />
      <PlanSlider
        plans={salasConPeriod}
        renderFeatures={renderFeatures}
        badgeMap={BADGE_MAP}
      />
    </article>
  );
}
