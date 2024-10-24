import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, BookOpen } from 'lucide-react';
import '../styles/estadisticas.css';

export function CartasEstadisticas () {
  const [counts, setCounts] = useState({
    students: 0,
    hours: 0,
    courses: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => ({
        students: prevCounts.students >= 5000 ? 5000 : prevCounts.students + 100,
        hours: prevCounts.hours >= 5000 ? 5000 : prevCounts.hours + 100,
        courses: prevCounts.courses >= 50 ? 50 : prevCounts.courses + 1
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="eduStats_container">
      <div className="eduStats_card">
        <div className="eduStats_iconWrapper">
          <GraduationCap size={40} className="eduStats_icon" />
        </div>
        <div className="eduStats_content">
          <div className="eduStats_number">
            {counts.students}+
          </div>
          <div className="eduStats_text">
            Alumnos capacitados a nivel nacional e internacional
          </div>
        </div>
      </div>

      <div className="eduStats_card">
        <div className="eduStats_iconWrapper">
          <Clock size={40} className="eduStats_icon" />
        </div>
        <div className="eduStats_content">
          <div className="eduStats_number">
            {counts.hours}+
          </div>
          <div className="eduStats_text">
            Horas de capacitación presencial y virtual
          </div>
        </div>
      </div>

      <div className="eduStats_card">
        <div className="eduStats_iconWrapper">
          <BookOpen size={40} className="eduStats_icon" />
        </div>
        <div className="eduStats_content">
          <div className="eduStats_number">
            {counts.courses}+
          </div>
          <div className="eduStats_text">
            Cursos y talleres disponibles
          </div>
        </div>
      </div>
    </div>
  );
};

