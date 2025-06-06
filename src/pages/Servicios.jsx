import React from "react";
import { OficinasIndividuales } from "../components/servicios/OficinasIndividuales";
import { NavigationMenu } from "../components/NavBar";
import { PuestosIndividuales } from "../components/servicios/PuestosIndividuales";
import { ContenidoAdicional } from "../components/servicios/ContenidoAdicional";
import { CoworkingSection } from "../components/servicios/CoworkingSection.jsx";
import { SectionSecond } from "../components/servicios/SectionSecond.jsx";
import {SalaCapacitaciones} from "../components/servicios/SalaCapacitaciones";
import ImagenNueva from "../img/Servicios/Image2.jpg";
import horarioImg from "../img/Servicios/Image horarios.jpg";
import { Footer } from "../components/footer.jsx";


export function Servicios() {
  return (
    <div>
      <NavigationMenu />
      <CoworkingSection />
      <SectionSecond />
      <OficinasIndividuales />
      <PuestosIndividuales />
      <SalaCapacitaciones />
      <section className="hero-section">
  <img src={ImagenNueva} className="backgroundNuevo-image" />
  <div className="hero-text">
    <p>Ya no sigas trabajando</p>
    <p>solo en casa</p>
  </div>
</section>

      <ContenidoAdicional />
      <div className="horario-container">
  <div className="horario-image">
    <img src={horarioImg} alt="Horario de uso" />
  </div>

  <div className="horario-text">
    <h2>Horario de uso de nuestros servicios:</h2>
    <p>Lunes a Viernes de 08:00 a 18:00</p>
    <p>(Sábados y domingos a convenir)</p>
  </div>
</div>

    <Footer />
    </div>
  );
}
