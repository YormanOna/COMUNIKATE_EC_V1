import React, { useEffect } from "react";
import { Footer } from "../components/footer";
import {ImageSlider} from "../components/HomeSlider";
import {NavigationMenu} from "../components/NavBar";
import {ClientLogos} from "../components/clientes";
import {TestimonialsSlider} from "../components/testimonios";
import {CartasEstadisticas} from "../components/estadisticas";
import {ContactComponent} from "../components/contactanos";

export function Home() {
  useEffect(() => {
    document.title = "Comunikate Ecuador - Inicio";
  }, []);
  
  return (
    <div>
      <NavigationMenu/>
      <ImageSlider/>
      <ClientLogos/>
      <CartasEstadisticas/>
      <br />
      <br />
      <TestimonialsSlider/>
      <br />
      <br />
      <ContactComponent/>
      <Footer/>
    </div>
  );
}