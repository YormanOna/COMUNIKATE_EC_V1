import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import instructoresData from '../../data/instructores.json';
import '../../styles/InstructorCard.css';

const InstructorCard = ({ instructor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Función para determinar si la información es extensa
  const isLongContent = () => {
    const totalItems = (instructor.experiencia?.length || 0) +
                      (instructor.trayectoria?.length || 0) +
                      (instructor.actual?.length || 0);
    return totalItems > 6 || instructor.descripcion.length > 2;
  };

  return (
    <>
      <div className="card-preview">
        <div className="imagen-container-preview">
          <div className="imagen-wrapper">
            <img src={instructor.imagen} alt={instructor.nombre} className="foto-instructores" />
          </div>
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
                  <div className="imagen-wrapper">
                    <img src={instructor.imagen} alt={instructor.nombre} className="foto-instructores" />
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
      <div className="grid-instructores">
        {instructores.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default InstructoresComponent;