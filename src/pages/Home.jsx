import React from "react";
import { Footer } from "../components/footer";
import {ImageSlider} from "../components/HomeSlider";
import {NavigationMenu} from "../components/NavBar";
import {ClientLogos} from "../components/clientes";
import {TestimonialsSlider} from "../components/testimonios";
import {CartasEstadisticas} from "../components/estadisticas";
import {ContactComponent} from "../components/contactanos";

export function Home() {
  return (
    <div>
      <NavigationMenu/>
      <ImageSlider/>
      <br />
      <br />
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