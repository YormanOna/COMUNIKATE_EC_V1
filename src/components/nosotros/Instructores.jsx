import React, { useState, useEffect } from 'react';
import '../../styles/InstructorCard.css';
import instructoresData from '../../data/instructores.json';

function InstructorCard({ instructor }) {
  return (
    <div className="card-instructores">
      <div className="imagen-container-instructores">
        <img src={instructor.imagen} alt={instructor.nombre} className="foto-instructores" />
        <h3 className="nombre-instructores">{instructor.titulo} {instructor.nombre}</h3>
      </div>
      <div className="info-container-instructores">
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
        {/* Solo mostrar la sección de trayectoria si instructor.trayectoria existe y tiene elementos */}
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
  );
}

export const InstructoresComponent = () => {
  const [instructores, setInstructores] = useState([]);

  useEffect(() => {
    setInstructores(instructoresData);
  }, []);

  return (
    <div className="container-instructores">
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
