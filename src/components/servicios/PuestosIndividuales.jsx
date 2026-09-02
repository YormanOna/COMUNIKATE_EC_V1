import React from 'react';
import { Clock, Users, Star, TrendingUp, Award, Zap } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { PlanSlider } from './PlanSlider';
import planesData from '../../data/PuestosIndividuales.json';
import puestoImg from '../../img/Servicios/Puestos Individuales.webp';

const BADGE_MAP = {
  BASIC:    { icon: Star,       label: 'Ideal para Empezar' },
  STANDARD: { icon: TrendingUp, label: 'Más Popular',       highlight: true },
  SPECIAL:  { icon: Award,      label: 'Mejor Valor' },
  PREMIUM:  { icon: Zap,        label: 'Máximo Beneficio' },
};

function renderFeatures(plan) {
  return (
    <>
      <div className="feature-oficinaIndividual">
        <div className="feature-icon-wrapper">
          <Clock size={18} aria-hidden="true" />
        </div>
        <div className="feature-text">
          <strong>{plan.privateOfficeHours} Horas</strong> puesto individual en coworking
        </div>
      </div>
      <div className="feature-oficinaIndividual">
        <div className="feature-icon-wrapper">
          <Users size={18} aria-hidden="true" />
        </div>
        <div className="feature-text">
          <strong>{plan.meetingRoomHours} Horas</strong> en sala de reuniones o capacitación
          <span className="max-persons-oficinaIndividual">
            <strong>(máximo {plan.maxMeetingPersons} personas)</strong>
          </span>
        </div>
      </div>
    </>
  );
}

export function PuestosIndividuales() {
  return (
    <article>
      <HeroSection
        imageSrc={puestoImg}
        imageAlt="Puestos individuales de trabajo compartido en Comunikate EC"
        title="PUESTOS INDIVIDUALES"
      />
      <PlanSlider
        plans={planesData}
        renderFeatures={renderFeatures}
        badgeMap={BADGE_MAP}
      />
    </article>
  );
}
