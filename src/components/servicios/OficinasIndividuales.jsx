import React from 'react';
import { Briefcase, Users, Star, TrendingUp, Award, Zap, Trophy } from 'lucide-react';
import { HeroSection } from './HeroSection';
import { PlanSlider } from './PlanSlider';
import planesData from '../../data/OficinaIndividual.json';
import oficinaImg from '../../img/Servicios/Oficina Individual.webp';

const BADGE_MAP = {
  BASIC:    { icon: Star,        label: 'Ideal para Empezar' },
  STANDARD: { icon: TrendingUp,  label: 'Más Popular',       highlight: true },
  SPECIAL:  { icon: Award,       label: 'Mejor Valor' },
  PREMIUM:  { icon: Zap,         label: 'Máximo Beneficio' },
  GOLD:     { icon: Trophy,      label: 'Plan Exclusivo',    highlight: true },
};

function renderFeatures(plan) {
  return (
    <>
      <div className="feature-oficinaIndividual">
        <div className="feature-icon-wrapper">
          <Briefcase size={18} aria-hidden="true" />
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

export function OficinasIndividuales() {
  return (
    <article>
      <HeroSection
        imageSrc={oficinaImg}
        imageAlt="Interior de una oficina individual en Comunikate EC"
        title="OFICINAS INDIVIDUALES"
      />
      <PlanSlider
        plans={planesData}
        renderFeatures={renderFeatures}
        badgeMap={BADGE_MAP}
      />
    </article>
  );
}
