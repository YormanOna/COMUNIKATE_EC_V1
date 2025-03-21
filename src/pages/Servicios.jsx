import React from "react";
import { OficinasIndividuales } from "../components/servicios/OficinasIndividuales";
import { NavigationMenu } from "../components/NavBar";
import { PuestosIndividuales } from "../components/servicios/PuestosIndividuales";
import { ContenidoAdicional } from "../components/servicios/ContenidoAdicional";
import { CoworkingSection } from "../components/servicios/CoworkingSection.jsx";
import { SectionSecond } from "../components/servicios/SectionSecond.jsx";
import ImagenNueva from "../img/Servicios/Image2.jpg";

export function Servicios() {
  return (
    <div>
      <NavigationMenu />
      <CoworkingSection />
      <SectionSecond />
      <OficinasIndividuales />
      <PuestosIndividuales />
      <section>
        <img
          src={ImagenNueva}
          className="backgroundNuevo-image"
        />
        <div className="overlay-textNuevo">
          <p>Ya no sigas trabajando</p>
          <p>solo en casa</p>
        </div>
      </section>
      <ContenidoAdicional />
    </div>
  );
}
