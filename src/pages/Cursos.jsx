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
  }
  , [location]);

  return (
    <div className="cursos-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <NavigationMenu />
        <h1 className="cursos-header">Nuestros cursos</h1>
<div className="cursospage">
  {/* Tarjeta Periodismo */}
  <div className="cursos-card" onClick={() => handleScroll("periodismo")}>
    <img src={ImgPeriodismo} alt="Periodismo" className="cursos-image" />
    <div className="cursos-overlay">
      <h2 className="cursos-title">Periodismo Cursos</h2>
    </div>
  </div>

  {/* Tarjeta Audiovisual */}
  <div className="cursos-card" onClick={() => handleScroll("audiovisual")}>
    <img src={ImgAudiovisual} alt="Audiovisual" className="cursos-image" />
    <div className="cursos-overlay">
      <h2 className="cursos-title">Audiovisual Cursos</h2>
    </div>
  </div>

  {/* Tarjeta Social Media */}
  <div className="cursos-card" onClick={() => handleScroll("socialMedia")}>
    <img src={ImgSocial} alt="Social Media" className="cursos-image" />
    <div className="cursos-overlay">
      <h2 className="cursos-title">Social Media Cursos</h2>
    </div>
  </div>

  {/* Tarjeta Otros */}
  <div className="cursos-card" onClick={() => handleScroll("otros")}>
    <img src={ImgOtros} alt="Otros" className="cursos-image" />
    <div className="cursos-overlay">
      <h2 className="cursos-title">Otros Cursos</h2>
    </div>
  </div>
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