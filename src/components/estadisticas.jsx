import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';
import '../styles/estadisticas.css';

const StatCard = ({ icon: Icon, targetNumber, text, delay }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInitialAnimated, setHasInitialAnimated] = useState(false);

  // Animación inicial automática
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      startAnimation(true);
    }, delay * 1000);

    return () => clearTimeout(initialTimer);
  }, []);

  const startAnimation = (isInitial = false) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCount(0);
    
    const duration = 1500;
    const steps = 50;
    const interval = duration / steps;
    const increment = targetNumber / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetNumber);
        clearInterval(timer);
        setTimeout(() => {
          setIsAnimating(false);
          if (isInitial) setHasInitialAnimated(true);
        }, 500);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, interval);
  };

  const handleHover = () => {
    if (hasInitialAnimated) {
      startAnimation(false);
    }
  };

  return (
    <div 
      className="eduStats_card"
      onMouseEnter={handleHover}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="eduStats_iconWrapper">
        <Icon size={48} className="eduStats_icon" />
      </div>
      <div className="eduStats_content">
        <div className="eduStats_number">
          {count}+
        </div>
        <div className="eduStats_text">
          {text}
        </div>
      </div>
      <div className="hover-hint">Pasa el mouse</div>
    </div>
  );
};

export function CartasEstadisticas () {
  return (
    <div className="eduStats_container">
      <StatCard 
        icon={GraduationCap}
        targetNumber={5000}
        text="Alumnos capacitados a nivel nacional e internacional"
        delay={0}
      />
      <StatCard 
        icon={Clock}
        targetNumber={5000}
        text="Horas de capacitación presencial y virtual"
        delay={0.1}
      />
      <StatCard 
        icon={BookOpen}
        targetNumber={50}
        text="Cursos y talleres disponibles"
        delay={0.2}
      />
    </div>
  );
};

