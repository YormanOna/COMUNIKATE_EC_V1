import React from "react";
import '../styles/Cursos/cursos_style.css';
// Importa las imágenes (ajusta las rutas según tu estructura de archivos)
import ImgAudiovisual from "../img/Cursos/AUDIOVISUAL.webp";
import ImgOtros from "../img/Cursos/OTROS.webp";
import ImgPeriodismo from "../img/Cursos/PERIODISMO.webp";
import ImgSocial from "../img/Cursos/SOCIAL_MEDIA.webp";
import { NavigationMenu } from "../components/NavBar";
import { Periodismo } from "../pages/Cursos/Periodismo.jsx";
import { Audiovisual } from "../pages/Cursos/Audiovisual.jsx";
import { Otros } from "../pages/Cursos/Otros.jsx";
import { SocialMedia } from "../pages/Cursos/SocialMedia.jsx";
import { Footer } from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Cursos() {
  const location = useLocation();
  
  useEffect(() => {
    document.title = "Cursos de Comunicación | Comunikate Ecuador";
  }, []);
  
  const cursosData = [
    {
      id: 'periodismo',
      title: 'Periodismo',
      image: ImgPeriodismo,
      description: 'Domina el arte de la comunicación profesional y conviértete en un experto en medios.',
      count: 6,
      icon: 'fa-microphone-alt',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(255,102,0,0.8))'
    },
    {
      id: 'audiovisual',
      title: 'Audiovisual',
      image: ImgAudiovisual,
      description: 'Crea contenido visual impactante con técnicas profesionales de producción.',
      count: 4,
      icon: 'fa-video',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(220,38,38,0.8))'
    },
    {
      id: 'socialMedia',
      title: 'Social Media',
      image: ImgSocial,
      description: 'Conquista las redes sociales y aprende estrategias de marketing digital efectivas.',
      count: 1,
      icon: 'fa-hashtag',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(59,130,246,0.8))'
    },
    {
      id: 'otros',
      title: 'Otros Cursos',
      image: ImgOtros,
      description: 'Amplía tus habilidades con cursos especializados en ventas, compras y formación.',
      count: 3,
      icon: 'fa-graduation-cap',
      gradient: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(34,197,94,0.8))'
    }
  ];

  // Función para hacer scroll a una sección específica de la página
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    if(location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        handleScroll(id);
      }, 300);
    }
  }, [location]);

  return (
    <div className="cursos-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <NavigationMenu />
        
        <div className="cursos-hero">
          <h1 className="cursos-header">Nuestros Cursos</h1>
          <p className="cursos-subtitle">Descubre programas diseñados para impulsar tu carrera profesional</p>
        </div>

        <div className="cursospage">
          {cursosData.map((curso, index) => (
            <div 
              key={curso.id}
              className="cursos-card" 
              onClick={() => handleScroll(curso.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={curso.image} alt={curso.title} className="cursos-image" />
              <div className="cursos-overlay" style={{ background: curso.gradient }}>
                <div className="cursos-content">
                  <div className="cursos-icon">
                    <i className={`fas ${curso.icon}`}></i>
                  </div>
                  <h2 className="cursos-title">{curso.title}</h2>
                  <p className="cursos-description">{curso.description}</p>
                  <div className="cursos-footer">
                    <span className="cursos-count">
                      <i className="fas fa-book"></i> {curso.count} {curso.count === 1 ? 'Curso' : 'Cursos'}
                    </span>
                    <span className="cursos-cta">
                      Ver Cursos <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

<br/>

        {/* Secciones de cursos */}
        <Periodismo />
        <br/>
        <SocialMedia />
        <br/>
        <Audiovisual />
        <br/>
        <Otros />
        <br/>
        <Footer />
    </div>
  );
}