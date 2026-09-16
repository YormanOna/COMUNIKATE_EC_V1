import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IMAGENOratoria from '../../../img/Cursos/Periodismo/Oratoria_Locución_Profesional.webp';
import { NavigationMenu } from '../../../components/NavBar';
import { CourseBackButton } from '../../../components/CourseBackButton';
import { CourseFaqAccordion } from '../../../components/CourseFaqAccordion';
import { oratoriaFaqData } from '../../../data/cursos/oratoriaFaq';
import { Footer } from '../../../components/footer';

export function OratoriaLocucion() {
  useEffect(() => {
    document.title = "Curso de Oratoria y Locución Profesional | Comunikate Ecuador";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <NavigationMenu />

      <div className="SectionTilteBlack">
        <h1>Periodismo</h1>
      </div>

      <div className="SectionTitleOrange">
        <h1>ORATORIA Y LOCUCIÓN PROFESIONAL</h1>
      </div>

      <CourseBackButton />

      {/* Contenedor Principal: Información y Sidebar */}
      <div className="container-SectionInfo">
        <div className="text-info-container">

          {/* Primera Sección Nueva: ¿Por qué Oratoria y Locución? */}
          <div className="course-why-box">
            <h3>
              <span>¿Por qué Oratoria y Locución?</span>
            </h3>
            <p>
              La oratoria y la locución van de la mano: la oratoria nos ayuda a organizar y expresar nuestras ideas con seguridad y claridad, mientras que la locución nos permite trabajar la voz, la dicción, la modulación y la expresión al comunicar.
            </p>
            <p>
              Por eso, nuestro curso combina ambas disciplinas para ayudarte a comunicarte mejor, fortalecer tu seguridad y desarrollar habilidades que puedas utilizar tanto en tu vida personal como profesional. No buscamos formar locutores o animadores, sino personas capaces de expresarse con mayor confianza, desenvolverse mejor y comunicar sus ideas de manera efectiva, ya sea en una conversación, una presentación, una entrevista de trabajo, una reunión, un emprendimiento o cualquier situación de su vida cotidiana y profesional.
            </p>
          </div>

          {/* Segunda Sección: Fundamento y Objetivo */}
          <div className="text-box-info">
            <p>
              Una de las mayores herramientas que dispone el hombre es la <strong>VOZ</strong>, misma que educada y explotada con todos sus recursos técnicos, ayudará a la verdadera formación humana y a fijar metas sin límites.
            </p>
            <p>
              Con este curso aprenderás de expresión oral, corporal, perderás el miedo de hablar en un escenario y adquirirás herramientas para ser un buen orador, líder, animador de eventos y locutor.
            </p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">OBJETIVO:</h3>
            <p>
              Desarrollar y potenciar las habilidades de expresión oral y corporal del estudiante, eliminando el miedo escénico y dotándole de técnicas prácticas de liderazgo, persuasión, modulación de la voz y oratoria para desenvolverse con solvencia ante cualquier audiencia o medio.
            </p>
          </div>

          {/* Módulos de Contenido Actualizados */}
          <div className="text-box-info">
            <h3 className="title-ObjeInfo">CONTENIDO ACADÉMICO:</h3>
            <div className="course-modules-wrapper">

              {/* Módulo 1 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 1: Fundamentos de la Voz y Expresión</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">1. Introducción: Presentación del curso y diagnóstico personalizado</li>
                  <li className="course-module-item">2. Elementos e importancia de la comunicación efectiva</li>
                  <li className="course-module-item">3. Técnicas de respiración diafragmática y control de aire</li>
                  <li className="course-module-item">
                    4. La voz: Cualidades, cuidado e impacto sonoro
                    <div className="course-subtags-container">
                      <span className="course-subtag">Tonos</span>
                      <span className="course-subtag">Intensidad</span>
                      <span className="course-subtag">Modulación</span>
                      <span className="course-subtag">Dicción</span>
                      <span className="course-subtag">Timbre</span>
                      <span className="course-subtag">Tiempo</span>
                      <span className="course-subtag">Ritmo</span>
                      <span className="course-subtag">Volumen</span>
                    </div>
                  </li>
                  <li className="course-module-item">5. Lenguaje oral: Lectura expresiva y corrección de vicios del lenguaje</li>
                  <li className="course-module-item">6. Manejo y superación del miedo escénico</li>
                  <li className="course-module-item">7. Introducción a la oratoria contemporánea</li>
                  <li className="course-module-item">
                    8. Oratoria: Conceptos, tipologías y Storytelling
                    <div className="course-subtags-container">
                      <span className="course-subtag">Storytelling y narración de impacto</span>
                    </div>
                  </li>
                  <li className="course-module-item">9. Lenguaje y dominio corporal en escena</li>
                  <li className="course-module-item">10. Técnicas de improvisación y agilidad de respuesta</li>
                  <li className="course-module-item">11. Evaluación práctica del primer módulo</li>
                </ul>
              </div>

              {/* Módulo 2 */}
              <div className="course-module-card">
                <div className="course-module-header">
                  <h4 className="course-module-title">Módulo 2: Liderazgo, Perfiles y Puesta en Escena</h4>
                </div>
                <ul className="course-module-list">
                  <li className="course-module-item">1. Motivación y comunicación para el liderazgo</li>
                  <li className="course-module-item">
                    2. Tipos de orador y versatilidad ante el público
                    <div className="course-subtags-container">
                      <span className="course-subtag">Animador</span>
                      <span className="course-subtag">Maestro de ceremonias</span>
                      <span className="course-subtag">Presentador</span>
                      <span className="course-subtag">Influencers</span>
                      <span className="course-subtag">Vendedor</span>
                      <span className="course-subtag">Atención al cliente</span>
                      <span className="course-subtag">Político</span>
                      <span className="course-subtag">Ponente</span>
                      <span className="course-subtag">Speaker profesional</span>
                    </div>
                  </li>
                  <li className="course-module-item">3. Locución y producción básica de Podcast</li>
                  <li className="course-module-item">4. Presentación final en vivo y evaluación integral</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Sidebar Fijo con Imagen y Ficha Técnica Actualizada */}
        <aside className="imagen-info-content" aria-label="Ficha técnica del curso">
          <img src={IMAGENOratoria} alt="Curso de Oratoria y Locución Profesional en Comunikate" />
          <div className="info-overlay">

            <div>
              <strong>MODALIDADES DISPONIBLES</strong>
              <p style={{ margin: '4px 0 6px', fontSize: '0.85rem' }}>Presencial en:</p>
              <div className="course-cities-pills">
                <span className="course-city-pill">Quito</span>
                <span className="course-city-pill">Guayaquil</span>
                <span className="course-city-pill">Cuenca</span>
                <span className="course-city-pill">Manta</span>
                <span className="course-city-pill">Santo Domingo</span>
                <span className="course-city-pill">Ambato</span>
              </div>
              <span className="course-virtual-badge">Virtual: Vía Zoom (Clases en vivo)</span>
            </div>

            <p><strong>MÉTODO EDUCATIVO</strong> Técnico - Práctico</p>
            <p><strong>DURACIÓN</strong> 24 horas reloj (2 Meses)</p>
            <p><strong>REQUISITOS</strong> Ninguno</p>
            <p><strong>CERTIFICADO</strong> Avalado por el Ministerio de Educación</p>
            <p><strong>¿A QUIÉN VA DIRIGIDO?</strong> Todo público</p>
            <p><strong>INSTRUCTORES PROFESIONALES</strong> Docentes activos en medios y comunicación</p>

            <Link to="/inscripciones" className="course-sidebar-cta">
              Inscríbete Aquí
            </Link>
          </div>
        </aside>
      </div>

      {/* Nueva Sección Reutilizable: Acordeón Categorizado por Pestañas */}
      <CourseFaqAccordion
        items={oratoriaFaqData}
        title="Preguntas Frecuentes"
        subtitle="Conoce todos los detalles sobre modalidades, recuperación de clases, horarios y certificación antes de comenzar."
        badge="Resolvemos tus inquietudes"
      />

      <Footer />
    </div>
  );
}

export default OratoriaLocucion;
