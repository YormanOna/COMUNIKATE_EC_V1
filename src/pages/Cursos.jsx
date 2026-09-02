import React, { lazy, Suspense, useCallback, useEffect, useMemo } from "react";
import '../styles/Cursos/cursos_style.css';
// Importa las imágenes (ajusta las rutas según tu estructura de archivos)
import ImgAudiovisual from "../img/Cursos/AUDIOVISUAL.webp";
import ImgOtros from "../img/Cursos/OTROS.webp";
import ImgPeriodismo from "../img/Cursos/PERIODISMO.webp";
import ImgSocial from "../img/Cursos/SOCIAL_MEDIA.webp";
import { NavigationMenu } from "../components/NavBar";
import { Footer } from "../components/footer";
import { useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Hash, Mic, Video } from "lucide-react";

const Periodismo = lazy(() => import("./Cursos/Periodismo.jsx").then(({ Periodismo: Component }) => ({ default: Component })));
const Audiovisual = lazy(() => import("./Cursos/Audiovisual.jsx").then(({ Audiovisual: Component }) => ({ default: Component })));
const Otros = lazy(() => import("./Cursos/Otros.jsx").then(({ Otros: Component }) => ({ default: Component })));
const SocialMedia = lazy(() => import("./Cursos/SocialMedia.jsx").then(({ SocialMedia: Component }) => ({ default: Component })));

const categoryIcons = { periodismo: Mic, audiovisual: Video, socialMedia: Hash, otros: GraduationCap };

export function Cursos() {
  const location = useLocation();
  
  useEffect(() => {
    document.title = "Cursos de Comunicación | Comunikate Ecuador";
  }, []);
  
  const cursosData = useMemo(() => [
    {
      id: 'periodismo',
      title: 'Periodismo',
      image: ImgPeriodismo,
      description: 'Domina el arte de la comunicación profesional y conviértete en un experto en medios.',
      count: 6,
      icon: 'periodismo',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(255,102,0,0.8))'
    },
    {
      id: 'audiovisual',
      title: 'Audiovisual',
      image: ImgAudiovisual,
      description: 'Crea contenido visual impactante con técnicas profesionales de producción.',
      count: 4,
      icon: 'audiovisual',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(220,38,38,0.8))'
    },
    {
      id: 'socialMedia',
      title: 'Social Media',
      image: ImgSocial,
      description: 'Conquista las redes sociales y aprende estrategias de marketing digital efectivas.',
      count: 1,
      icon: 'socialMedia',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(59,130,246,0.8))'
    },
    {
      id: 'otros',
      title: 'Otros Cursos',
      image: ImgOtros,
      description: 'Amplía tus habilidades con cursos especializados en ventas, compras y formación.',
      count: 3,
      icon: 'otros',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(34,197,94,0.8))'
    }
  ], []);

  // Función para hacer scroll a una sección específica de la página
  const handleScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const frame = requestAnimationFrame(() => handleScroll(id));
      return () => cancelAnimationFrame(frame);
    }
  }, [handleScroll, location.hash]);

  return (
    <div className="cursos-container">
        <NavigationMenu />
        
        <div className="cursos-hero">
          <h1 className="cursos-header">Nuestros Cursos</h1>
          <p className="cursos-subtitle">Descubre programas diseñados para impulsar tu carrera profesional</p>
        </div>

        <div className="cursospage">
          {cursosData.map((curso, index) => (
            <button
              key={curso.id}
              className="cursos-card" 
              type="button"
              onClick={() => handleScroll(curso.id)}
              aria-label={`Ver cursos de ${curso.title}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={curso.image} alt="" className="cursos-image" width="640" height="450" />
              <div className="cursos-overlay" style={{ background: curso.gradient }}>
                <div className="cursos-content">
                  <div className="cursos-icon" aria-hidden="true">
                    {React.createElement(categoryIcons[curso.icon], { size: 42, strokeWidth: 1.8 })}
                  </div>
                  <h2 className="cursos-title">{curso.title}</h2>
                  <p className="cursos-description">{curso.description}</p>
                  <div className="cursos-footer">
                    <span className="cursos-count">
                      <BookOpen size={17} aria-hidden="true" /> {curso.count} {curso.count === 1 ? 'Curso' : 'Cursos'}
                    </span>
                    <span className="cursos-cta">
                      Ver cursos <ArrowRight size={17} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Secciones de cursos */}
        <Suspense fallback={<div className="cursos-sections-loading" aria-label="Cargando cursos">Cargando cursos…</div>}>
          <Periodismo />
          <SocialMedia />
          <Audiovisual />
          <Otros />
        </Suspense>
        <Footer />
    </div>
  );
}
