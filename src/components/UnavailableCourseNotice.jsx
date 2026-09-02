import { X } from 'lucide-react';
import PropTypes from 'prop-types';

export function UnavailableCourseNotice({ course, onClose }) {
  return (
    <div className="unavailable-course-notice" role="alertdialog" aria-modal="true" aria-labelledby="unavailable-course-title">
      <div className="unavailable-course-notice__box">
        <button type="button" className="unavailable-course-notice__close" onClick={onClose} aria-label="Cerrar aviso">
          <X size={18} aria-hidden="true" />
        </button>
        <span className="unavailable-course-notice__icon" aria-hidden="true">!</span>
        <h2 id="unavailable-course-title">Información próximamente</h2>
        <p>La información de <strong>{course}</strong> todavía no está disponible, pero estaremos publicándola muy pronto.</p>
        <button type="button" className="unavailable-course-notice__action" onClick={onClose}>Entendido</button>
      </div>
    </div>
  );
}

UnavailableCourseNotice.propTypes = {
  course: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
