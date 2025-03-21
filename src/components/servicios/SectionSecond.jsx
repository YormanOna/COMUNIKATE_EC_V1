import React from 'react';
import '../../styles/servicios/CoworkingSection.css'; 
import coworkingImage from '../../img/Servicios/SecondImage.jpg'; // Importa la imagen

export function SectionSecond () {
  return (
    <div className="coworking-container">
      <div className="coworking-image-section">
        <img src={coworkingImage} alt="Espacio de coworking" className="coworking-background-image" />
        <div className="coworking-overlay">
          <h1 className="coworking-title">TENEMOS EL PLAN QUE BUSCAS</h1>
        </div>
      </div>
      <div className="coworking-orange-bar">
        <h2 className="coworking-subtitle">ESPACIOS COMPARTIDO</h2>
      </div>
    </div>
  );
};

