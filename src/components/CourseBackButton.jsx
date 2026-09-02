import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function CourseBackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sectionByCourse = pathname.includes('/social-media/')
    ? '/cursos#socialMedia'
    : pathname.includes('/audiovisual/')
      ? '/cursos#audiovisual'
      : '/cursos#periodismo';

  return (
    <button type="button" className="course-back-button" onClick={() => navigate(sectionByCourse)}>
      <ArrowLeft size={18} aria-hidden="true" />
      <span>Regresar</span>
    </button>
  );
}
