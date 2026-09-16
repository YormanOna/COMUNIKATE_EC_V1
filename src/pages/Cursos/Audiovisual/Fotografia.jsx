import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IMAGENFotografia from '../../../img/Cursos/Audiovisual/FOTOGRAFIA.webp';
import { NavigationMenu } from '../../../components/NavBar';
import { CourseBackButton } from '../../../components/CourseBackButton';
import { CourseFaqAccordion } from '../../../components/CourseFaqAccordion';
import { fotografiaFaqData } from '../../../data/cursos/fotografiaFaq';
import { Footer } from '../../../components/footer';

export function Fotografia() {
  useEffect(() => {
    document.title = "Curso de Fotografía Profesional | Comunikate Ecuador";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <NavigationMenu />

      <div className="SectionTilteBlack">
        <h1>AUDIOVISUAL</h1>
      </div>

      <div className="SectionTitleOrange">
        <h1>FOTOGRAFÍA PROFESIONAL CON IA</h1>
      </div>

      <CourseBackButton />

      {/* Contenedor Principal: Información y Sidebar */}
      <div className="container-SectionInfo">
        <div className="text-info-container">

          <div className="text-box-info">
            <p>
              La fotografía es el arte de plasmar la realidad en imágenes, combinando técnica y creatividad para capturar la esencia de la vida, contar historias, expresar emociones y revelar la belleza y la complejidad del mundo, desde la perspectiva única del fotógrafo. Por eso, este curso está enfocado para personas que quieran aprender a tomar fotografías de forma profesional, aprovechando a utilizar recursos como celulares y/o cámaras profesionales.
            </p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">OBJETIVO:</h3>
            <p>
              Con este curso aprenderás de fotografía de productos, alimentos, iluminación y edición de fotografía, todo esto permitirá que los estudiantes puedan explotar su creatividad en el mundo de la fotografía.
            </p>
            <p>
              Se Proporcionará a los alumnos los conocimientos y técnicas esenciales de la fotografía, desde las reglas de composición y el manejo de la cámara hasta el uso de la iluminación y el proceso de revelado digital.
            </p>
            <p>
              Al final del curso, los estudiantes serán capaces de aplicar técnicas de composición efectivas, entender y manipular la exposición y la luz para diferentes géneros fotográficos, y realizar el revelado digital de sus imágenes utilizando Adobe Lightroom.
            </p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">CONTENIDO:</h3>
            <div className="course-modules-wrapper">

              {/* Módulo 1 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 1 · Dominio Técnico de la Cámara</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Control avanzado de la cámara, exposición, enfoque, medición, balance de blancos, histograma, rango dinámico y formatos de captura.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Configuración de la cámara para distintos escenarios fotográficos.
                  </li>
                </ul>
              </div>

              {/* Módulo 2 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 2 · Iluminación Profesional y Fotografía de Estudio</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Iluminación natural y artificial, control de la luz, fotografía de estudio, retrato, producto y esquemas de iluminación.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Producción de una sesión fotográfica en estudio.
                  </li>
                </ul>
              </div>

              {/* Módulo 3 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 3 · Lenguaje Visual y Narrativa Fotográfica</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Composición avanzada, diseño fotográfico, storytelling, fotografía documental y ética profesional.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Creación de una serie fotográfica con narrativa visual.
                  </li>
                </ul>
              </div>

              {/* Módulo 4 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 4 · Producción Fotográfica y Flujo Digital</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Planificación de sesiones, flujo de trabajo digital, organización de archivos y revelado profesional.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Edición completa de una sesión fotográfica.
                  </li>
                </ul>
              </div>

              {/* Módulo 5 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 5 · Inteligencia Artificial Aplicada a la Fotografía</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Herramientas de IA para optimización del flujo de trabajo, retoque, restauración, fotografía generativa e ingeniería de prompts.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Aplicación de IA en una sesión fotográfica y generación de recursos visuales.
                  </li>
                </ul>
              </div>

              {/* Módulo 6 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 6 · Proyecto Integrador y Portafolio Profesional</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">
                    <strong>Tema:</strong> Tendencias actuales, construcción del portafolio y presentación profesional del trabajo fotográfico.
                  </li>
                  <li className="course-module-item">
                    <strong>Taller:</strong> Desarrollo y presentación de un proyecto fotográfico integrador.
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Sidebar Fijo con Imagen y Ficha Técnica Actualizada */}
        <aside className="imagen-info-content" aria-label="Ficha técnica del curso">
          <img src={IMAGENFotografia} alt="Curso de Fotografía Profesional en Comunikate" />
          <div className="info-overlay">

            <div>
              <strong>MODALIDADES DISPONIBLES</strong>
              <p style={{ margin: '4px 0 6px', fontSize: '0.85rem' }}>Presencial en:</p>
              <div className="course-cities-pills">
                <span className="course-city-pill">Quito</span>
              </div>
              <span className="course-virtual-badge">Virtual: Vía Zoom (Clases en vivo)</span>
            </div>

            <p><strong>MÉTODO EDUCATIVO</strong> Técnico - Práctico</p>
            <p><strong>DURACIÓN</strong> 24 horas reloj (2 Meses)</p>
            <p><strong>REQUISITOS</strong> Ninguno</p>
            <p><strong>CERTIFICADO</strong> Avalado por el Ministerio de Trabajo</p>
            <p><strong>¿A QUIÉN VA DIRIGIDO?</strong> Todo público</p>
            <p><strong>INSTRUCTORES PROFESIONALES</strong> Docentes especializados en fotografía y edición</p>

            <Link to="/inscripciones" className="course-sidebar-cta">
              Inscríbete Aquí
            </Link>
          </div>
        </aside>
      </div>

      {/* Sección Desplegable de Preguntas Frecuentes Reutilizable */}
      <CourseFaqAccordion
        items={fotografiaFaqData}
        title="Preguntas Frecuentes"
        badge="Resolvemos tus inquietudes"
      />

      <Footer />
    </div>
  );
}

export default Fotografia;
