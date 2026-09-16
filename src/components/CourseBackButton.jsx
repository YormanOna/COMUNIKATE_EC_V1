import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function CourseBackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const targetSection = useMemo(() => {
    const lowerPath = pathname.toLowerCase();
    if (lowerPath.includes('/periodismo/')) {
      return '/cursos#periodismo';
    }
    if (lowerPath.includes('/audiovisual/')) {
      return '/cursos#audiovisual';
    }
    if (lowerPath.includes('/social-media/')) {
      return '/cursos#socialMedia';
    }
    if (lowerPath.includes('/otros/')) {
      return '/cursos#otros';
    }
    return '/cursos';
  }, [pathname]);

  const handleBack = () => {
    navigate(targetSection);
  };

  return (
    <div className="course-back-bar">
      <div className="course-back-bar-content">
        <button
          type="button"
          className="course-back-button"
          onClick={handleBack}
          aria-label="Regresar a la sección correspondiente"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          <span>Regresar</span>
        </button>
      </div>
    </div>
  );
}
