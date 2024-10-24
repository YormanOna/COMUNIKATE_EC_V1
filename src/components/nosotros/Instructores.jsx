import React from 'react';
import '../../styles/InstructorCard.css';
import Image1 from '../../img/Instructores/LEONARDO_BALSECA.png';

// Componente InstructorCard
function InstructorCard({ instructor }) {
    return (
      <div className="card-instructores">
        <div className="imagen-container-instructores">
          <img src={instructor.imagen} alt={instructor.nombre} className="foto-instructores" />
          <h3 className="nombre-instructores">{instructor.titulo} {instructor.nombre}</h3>
        </div>
        <div className="info-container-instructores">
          <p className="descripcion-instructores">{instructor.descripcion}</p>
  
          <div className="seccion-instructores">
            <h4 className="subtitulo-instructores">Experiencia y Logros:</h4>
            <ul className="lista-instructores">
              {instructor.experiencia.map((item, index) => (
                <li key={index} className="item-instructores">{item}</li>
              ))}
            </ul>
          </div>
  
          <div className="seccion-instructores">
            <h4 className="subtitulo-instructores">Trayectoria en Medios:</h4>
            <ul className="lista-instructores">
              {instructor.trayectoria.map((item, index) => (
                <li key={index} className="item-instructores">{item}</li>
              ))}
            </ul>
          </div>
  
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

// Componente principal
 export const InstructoresComponent = () => {
  const instructores = [
    {
      titulo: "MSC.",
      nombre: "LEONARDO BALSECA",
      imagen: Image1,
      descripcion: "Con más de 20 años de experiencia en la industria de la comunicación, Leonardo es un profesional reconocido por su talento y versatilidad.",
      experiencia: [
        "Presentador de televisión y eventos especiales.",
        "Locutor y conductor de programas de renombre.",
        "Media Training y coaching para personalidades públicas.",
        "Instructor de Presentador de TV y medios digitales, y Media Training en Comunikate Ecuador.",
        "Organizador de eventos y ceremonias."
      ],
      trayectoria: [
        "Presentador de noticias en canales como Gama, Canal Uno y RTU.",
        "Experto en comunicación efectiva y estratégica."
      ],
      actual: [
        "Maestro de ceremonias.",
        "Instructor en Comunikate Ecuador (Presentador de TV y medios digitales, y Media Training).",
        "Community Manager."
      ]
    }
  ]; // Agregué el corchete de cierre que faltaba

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