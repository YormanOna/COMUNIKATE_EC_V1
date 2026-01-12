import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import instructoresData from '../../data/instructores.json';
import '../../styles/InstructorCard.css';

const InstructorCard = ({ instructor, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Función para determinar si la información es extensa
  const isLongContent = () => {
    const totalItems = (instructor.experiencia?.length || 0) +
                      (instructor.trayectoria?.length || 0) +
                      (instructor.actual?.length || 0);
    return totalItems > 6 || instructor.descripcion.length > 2;
  };

  // Extraer especialidades de la experiencia
  const getEspecialidades = () => {
    const especialidades = [];
    const text = instructor.experiencia.join(' ') + instructor.actual.join(' ');
    
    if (text.toLowerCase().includes('oratoria')) especialidades.push('Oratoria');
    if (text.toLowerCase().includes('media training')) especialidades.push('Media Training');
    if (text.toLowerCase().includes('periodismo')) especialidades.push('Periodismo');
    if (text.toLowerCase().includes('locutor') || text.toLowerCase().includes('locución')) especialidades.push('Locución');
    if (text.toLowerCase().includes('audiovisual') || text.toLowerCase().includes('producción')) especialidades.push('Audiovisual');
    if (text.toLowerCase().includes('presentador') || text.toLowerCase().includes('tv')) especialidades.push('Presentador TV');
    
    return especialidades.slice(0, 3); // Máximo 3 badges
  };

  // Calcular años de experiencia
  const getExperienciaAnios = () => {
    const descText = instructor.descripcion.join(' ');
    const match = descText.match(/(\d+)\s*años?\s*de\s*experiencia/i);
    return match ? match[1] : null;
  };

  const especialidades = getEspecialidades();

  return (
    <>
      <div 
        className="card-preview"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="imagen-container-preview">
          <div className="imagen-wrapper">
            {!imageLoaded && <div className="image-skeleton"></div>}
            <img 
              src={instructor.imagen} 
              alt={instructor.nombre} 
              className={`foto-instructores ${imageLoaded ? 'loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          {especialidades.length > 0 && (
            <div className="badges-container">
              {especialidades.map((esp, idx) => (
                <span key={idx} className="especialidad-badge">{esp}</span>
              ))}
            </div>
          )}
          <h3 className="nombre-instructores">{instructor.titulo} {instructor.nombre}</h3>
          <button 
            onClick={() => setIsExpanded(true)}
            className="ver-mas-btn"
          >
            Ver más
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="modal-overlay" onClick={() => setIsExpanded(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setIsExpanded(false)}
            >
              <X size={24} />
            </button>

            <div className="modal-grid">
              <div className="modal-left-column">
                <div className="imagen-container-instructores">
                  <div className="imagen-wrapper-modal">
                    <img src={instructor.imagen} alt={instructor.nombre} className="foto-instructores-modal" />
                  </div>
                  <h3 className="nombre-instructores">{instructor.titulo} {instructor.nombre}</h3>
                </div>

                <div className={`info-container-instructores ${isLongContent() ? 'two-columns' : ''}`}>
                  <div className="info-column">
                    {instructor.descripcion.map((parrafo, index) => (
                      <p key={index} className="descripcion-instructores">{parrafo}</p>
                    ))}
                    
                    <div className="seccion-instructores">
                      <h4 className="subtitulo-instructores">Experiencia y Logros:</h4>
                      <ul className="lista-instructores">
                        {instructor.experiencia.map((item, index) => (
                          <li key={index} className="item-instructores">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="info-column">
                    {instructor.trayectoria && instructor.trayectoria.length > 0 && (
                      <div className="seccion-instructores">
                        <h4 className="subtitulo-instructores">Trayectoria en Medios:</h4>
                        <ul className="lista-instructores">
                          {instructor.trayectoria.map((item, index) => (
                            <li key={index} className="item-instructores">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="seccion-instructores">
                      <h4 className="subtitulo-instructores">Actualmente se desempeña como:</h4>
                      <ul className="lista-instructores">
                        {instructor.actual.map((item, index) => (
                          <li key={index} className="item-instructores">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const InstructoresComponent = () => {
  const [instructores, setInstructores] = useState([]);

  useEffect(() => {
    setInstructores(instructoresData);
  }, []);

  return (
    <div className="container-instructores" id= "instructores">
      <h1 className="titulo-instructores">INSTRUCTORES</h1>
      <p className="contador-instructores">Nuestro equipo: {instructores.length} profesionales</p>
      <div className="grid-instructores">
        {instructores.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default InstructoresComponent;