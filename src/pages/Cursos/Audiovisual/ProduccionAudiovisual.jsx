import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import IMAGENAudiovisual from '../../../img/Cursos/Audiovisual/AUDIOVISUAL.webp';
import { NavigationMenu } from '../../../components/NavBar';
import { CourseBackButton } from '../../../components/CourseBackButton';
import { CourseFaqAccordion } from '../../../components/CourseFaqAccordion';
import { produccionAudiovisualFaqData } from '../../../data/cursos/produccionAudiovisualFaq';
import { Footer } from '../../../components/footer';

export function ProduccionAudiovisual() {
  useEffect(() => {
    document.title = "Curso de Producción Audiovisual y Creación de Contenido con IA | Comunikate Ecuador";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <NavigationMenu />

      <div className="SectionTilteBlack">
        <h1>Audiovisual</h1>
      </div>

      <div className="SectionTitleOrange">
        <h1>PRODUCCIÓN AUDIOVISUAL Y CREACIÓN DE CONTENIDO CON IA</h1>
      </div>

      <CourseBackButton />

      {/* Contenedor Principal: Información y Sidebar */}
      <div className="container-SectionInfo">
        <div className="text-info-container">

          <div className="text-box-info">
            <p>
              La producción audiovisual es el arte de crear contenido multimedia que combina sonido e imagen para ser transmitido o publicado en diversas plataformas, desde medios de comunicación masiva como radio y televisión hasta redes sociales y plataformas digitales.
            </p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">OBJETIVO:</h3>
            <p>
              Con este curso aprenderás a producir tus contenidos audiovisuales desde cero y de forma profesional, utilizando tu smartphone como herramienta de trabajo para grabar y editar videos para redes sociales, como también conocerás de manejo de cámaras profesionales, iluminación y mucho más.
            </p>
          </div>

          <div className="text-box-info">
            <h3 className="title-ObjeInfo">CONTENIDO:</h3>
            <ol>
              <li>El creador de contenido y las plataformas de distribución. ¿Cómo funcionan los algoritmos?</li>
              <li>El contenido que funciona en cada plataforma y cómo crearlo.</li>
              <li>Storytelling y escritura para redes sociales.</li>
              <li>Lenguaje audiovisual (Lenguaje cinematográfico, tipos de plano, ángulos y movimientos de cámara, composición, perspectiva, teoría del color, continuidad, ritmo visual y gramática audiovisual).</li>
              <li>Fotografía (Cómo funciona una cámara, triángulo de exposición, balance de blancos, formatos RAW y JPG, histograma, lentes, profundidad de campo y fotografía aplicada a la comunicación de marca).</li>
              <li>Iluminación (Luz natural y artificial, temperatura de color, calidad y dirección de la luz, iluminación para fotografía y video, esquemas básicos de iluminación, modificadores de luz, iluminación para entrevistas, productos y contenido para redes sociales).</li>
              <li>Producción audiovisual (Preproducción, planificación de contenidos, guion técnico y storyboard, organización de rodajes, dirección de talento, grabación con smartphone y cámara profesional, captura de audio, producción para formatos verticales y horizontales).</li>
              <li>Edición narrativa (Fundamentos del montaje, ritmo narrativo, estructura de edición, selección de tomas, edición para retención de audiencia, edición en formato vertical, diseño sonoro, música, efectos, colorización, subtítulos y optimización para redes sociales).</li>
              <li>Inteligencia Artificial aplicada a la creación de contenido (Ingeniería de prompts, generación de ideas, investigación, redacción asistida, generación y edición de imágenes, creación de video con IA, clonación de voz, avatares digitales, automatización de flujos de trabajo, herramientas de IA para marketing y productividad).</li>
              <li>Branding y construcción de marca personal (Identidad de marca, posicionamiento, propuesta de valor, tono de comunicación, narrativa de marca, identidad visual, consistencia de contenidos, reputación digital y desarrollo de una comunidad).</li>
              <li>Analítica del contenido publicado (Métricas e indicadores clave (KPIs), alcance, impresiones, engagement, retención, tiempo de visualización, tasa de conversión, análisis de audiencias, interpretación de datos, pruebas A/B y optimización basada en resultados).</li>
              <li>Proyecto integrador (Diseño y ejecución de una estrategia de contenido para una marca o marca personal, investigación, planificación, producción fotográfica y audiovisual, aplicación de IA, edición, publicación, análisis de resultados y presentación final del proyecto).</li>
            </ol>
          </div>

        </div>

        {/* Sidebar Fijo con Imagen y Ficha Técnica Actualizada */}
        <aside className="imagen-info-content" aria-label="Ficha técnica del curso">
          <img src={IMAGENAudiovisual} alt="Curso de Producción Audiovisual y Creación de Contenido con IA en Comunikate" />
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
            <p><strong>REQUISITOS</strong> Ninguno (aprende desde cero)</p>
            <p><strong>CERTIFICADO</strong> Avalado por el Ministerio de Trabajo</p>
            <p><strong>¿A QUIÉN VA DIRIGIDO?</strong> Todo público</p>
            <p><strong>INSTRUCTORES PROFESIONALES</strong> Expertos en producción audiovisual y herramientas de IA</p>

            <Link to="/inscripciones" className="course-sidebar-cta">
              Inscríbete Aquí
            </Link>
          </div>
        </aside>
      </div>

      {/* Acordeón de Preguntas Frecuentes Reutilizable */}
      <CourseFaqAccordion
        items={produccionAudiovisualFaqData}
        title="Preguntas Frecuentes"
        
        badge="Resolvemos tus inquietudes"
      />

      <Footer />
    </div>
  );
}

export default ProduccionAudiovisual;
