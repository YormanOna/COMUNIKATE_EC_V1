import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu } from "../components/NavBar";
import { HeroSection } from "../components/servicios/HeroSection";
import { OficinasIndividuales } from "../components/servicios/OficinasIndividuales";
import { PuestosIndividuales } from "../components/servicios/PuestosIndividuales";
import { SalaCapacitaciones } from "../components/servicios/SalaCapacitaciones";
import { ContenidoAdicional } from "../components/servicios/ContenidoAdicional";
import { HorarioSection } from "../components/servicios/HorarioSection";
import { ServicesCTA } from "../components/servicios/ServicesCTA";
import { Footer } from "../components/footer.jsx";
import "../styles/servicios/Servicios.css";

import motivacionImg from "../img/Servicios/Image2.webp";
import coworkingImg from "../img/Servicios/coworking-image.webp";

export function Servicios() {
  useEffect(() => {
    document.title = "Servicios de Coworking | Comunikate Ecuador";
  }, []);

  return (
    <div className="servicios-page">
      <NavigationMenu />

      {/* 1. Banner principal de bienvenida */}
      <HeroSection
        imageSrc={coworkingImg}
        imageAlt="Espacio de coworking de Comunikate Ecuador"
        title="COWORKING"
        subtitle="ESPACIOS COMPARTIDOS"
      />

      {/* 2. Sub-banner: tenemos el plan que buscas */}
      <HeroSection
        imageSrc={motivacionImg}
        imageAlt="Planes de coworking adaptados a ti"
        title="TENEMOS EL PLAN QUE BUSCAS"
        subtitle="ESPACIOS COMPARTIDOS"
      />

      {/* 3. Tipos de espacios */}
      <OficinasIndividuales />
      <PuestosIndividuales />
      <SalaCapacitaciones />

      {/* 4. Hero de motivación con CTA */}
      <section
        className="servicios-hero-motivacion"
        aria-label="Únete a la comunidad"
        style={{ backgroundImage: `url(${motivacionImg})` }}
      >
        <div className="servicios-hero-motivacion__overlay" aria-hidden="true" />
        <div className="servicios-hero-motivacion__content">
          <h1 className="servicios-hero-motivacion__heading">
            Ya no sigas trabajando solo en casa
          </h1>
          <p className="servicios-hero-motivacion__subtitle">
            Únete a nuestra comunidad profesional
          </p>
          <Link to="/contacto" className="servicios-hero-motivacion__cta">
            <i className="fas fa-calendar-check" aria-hidden="true" />
            Agenda tu visita
          </Link>
        </div>
      </section>

      {/* 5. Beneficios incluidos en todos los planes */}
      <ContenidoAdicional />

      {/* 6. Horarios */}
      <HorarioSection />

      {/* 7. Llamada a la acción final */}
      <ServicesCTA />

      <Footer />
    </div>
  );
}
