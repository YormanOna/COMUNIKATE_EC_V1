import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IMAGENPequenosOradores from '../../../img/Cursos/Periodismo/curso_pequeoradores.webp';
import { NavigationMenu } from '../../../components/NavBar';
import { CourseBackButton } from '../../../components/CourseBackButton';
import { Footer } from '../../../components/footer';
import cursoData from '../../../data/cursos/pequenosOradores.json';

export function PequenosOradores() {
  useEffect(() => {
    document.title = "Curso de Pequeños Oradores | Comunikate Ecuador";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <NavigationMenu />

      <div className="SectionTilteBlack">
        <h1>{cursoData.categoria}</h1>
      </div>

      <div className="SectionTitleOrange">
        <h1>{cursoData.titulo}</h1>
      </div>

      <CourseBackButton />

      {/* Contenedor Principal: Información y Sidebar */}
      <div className="container-SectionInfo">
        <div className="text-info-container">

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">PRESENTACIÓN:</h3>
            <p>{cursoData.presentacion}</p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">OBJETIVO:</h3>
            <p>{cursoData.objetivo}</p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">CONTENIDO:</h3>
            <ul>
              {cursoData.contenido.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sidebar con Imagen y Ficha Técnica */}
        <aside className="imagen-info-content" aria-label="Ficha técnica del curso">
          <img src={IMAGENPequenosOradores} alt="Curso Pequeños Oradores en Comunikate" />
          <div className="info-overlay">

            <div>
              <strong>MODALIDADES DISPONIBLES</strong>
              <p style={{ margin: '4px 0 6px', fontSize: '0.85rem' }}>Presencial en:</p>
              <div className="course-cities-pills">
                {cursoData.fichaTecnica.modalidades.presencial.map((ciudad, idx) => (
                  <span key={idx} className="course-city-pill">{ciudad}</span>
                ))}
              </div>
              <span className="course-virtual-badge">{cursoData.fichaTecnica.modalidades.virtual}</span>
            </div>

            <p><strong>MÉTODO EDUCATIVO</strong> {cursoData.fichaTecnica.metodoEducativo}</p>
            <p><strong>DURACIÓN</strong> {cursoData.fichaTecnica.duracion}</p>
            <p><strong>REQUISITOS</strong> {cursoData.fichaTecnica.requisitos}</p>
            <p><strong>CERTIFICADO</strong> {cursoData.fichaTecnica.certificado}</p>
            <p><strong>¿A QUIÉN VA DIRIGIDO?</strong> {cursoData.fichaTecnica.dirigidoA}</p>
            <p><strong>INSTRUCTORES PROFESIONALES</strong> {cursoData.fichaTecnica.instructores}</p>

            <Link to="/inscripciones" className="course-sidebar-cta">
              Inscríbete Aquí
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default PequenosOradores;
