// Certificaciones.jsx
import React from 'react';
import '../../styles/certificaciones.css';
import logoLaboral from '../../img/Certificados/certi_1.png'; 
import logoEducacion from '../../img/Certificados/certi_2.png'; 

export function Certificaciones  () {
    return (
        <section className="container-certificaciones" id="certificados">
            <div className="header-certificaciones">
                <h2>CERTIFICACIONES</h2>
            </div>
            
            <div className="logos-container-certificaciones">
                <div className="logo-box-certificaciones">
                    <img 
                        src={logoLaboral} 
                        alt="Ministerio de Relaciones Laborales" 
                        className="logo-image-certificaciones"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="logo-box-certificaciones">
                    <img 
                        src={logoEducacion} 
                        alt="Ministerio de Educación" 
                        className="logo-image-certificaciones"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};
